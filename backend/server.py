from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from datetime import datetime

# Import models
from models.settings import Settings, SettingsCreate, SettingsUpdate
from models.package_links import PackageLinks, PackageLinksCreate, PackageLinksUpdate
from models.legal_texts import LegalTexts, LegalTextsCreate, LegalTextsUpdate
from models.content import Content, ContentCreate, ContentUpdate

# Import services
from services.database_service import DatabaseService

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Initialize database service
db_service = DatabaseService(db)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Helper function to clean MongoDB document
def clean_mongo_document(doc):
    """Remove MongoDB _id and convert to dict"""
    if doc and '_id' in doc:
        doc['id'] = str(doc['_id'])
        del doc['_id']
    return doc

# Original endpoints
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

# Settings endpoints
@api_router.get("/settings")
async def get_settings():
    """Get current settings"""
    try:
        settings = await db_service.get_settings()
        return clean_mongo_document(settings)
    except Exception as e:
        logging.error(f"Error getting settings: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to get settings")

@api_router.post("/settings")
async def update_settings(settings_data: SettingsUpdate):
    """Update settings"""
    try:
        # Convert to dict and remove None values
        update_data = {k: v for k, v in settings_data.dict().items() if v is not None}
        
        if not update_data:
            raise HTTPException(status_code=400, detail="No valid data provided")
        
        updated_settings = await db_service.update_settings(update_data)
        return clean_mongo_document(updated_settings)
    except Exception as e:
        logging.error(f"Error updating settings: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update settings")

# Package Links endpoints
@api_router.get("/packages")
async def get_package_links():
    """Get package links"""
    try:
        package_links = await db_service.get_package_links()
        return clean_mongo_document(package_links)
    except Exception as e:
        logging.error(f"Error getting package links: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to get package links")

@api_router.put("/packages")
async def update_package_links(links_data: PackageLinksUpdate):
    """Update package links"""
    try:
        # Convert to dict and remove None values
        update_data = {k: v for k, v in links_data.dict().items() if v is not None}
        
        if not update_data:
            raise HTTPException(status_code=400, detail="No valid data provided")
        
        updated_links = await db_service.update_package_links(update_data)
        return clean_mongo_document(updated_links)
    except Exception as e:
        logging.error(f"Error updating package links: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update package links")

# Legal Texts endpoints
@api_router.get("/legal")
async def get_legal_texts():
    """Get legal texts"""
    try:
        legal_texts = await db_service.get_legal_texts()
        return clean_mongo_document(legal_texts)
    except Exception as e:
        logging.error(f"Error getting legal texts: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to get legal texts")

@api_router.put("/legal")
async def update_legal_texts(texts_data: LegalTextsUpdate):
    """Update legal texts"""
    try:
        # Convert to dict and remove None values
        update_data = {k: v for k, v in texts_data.dict().items() if v is not None}
        
        if not update_data:
            raise HTTPException(status_code=400, detail="No valid data provided")
        
        updated_texts = await db_service.update_legal_texts(update_data)
        return clean_mongo_document(updated_texts)
    except Exception as e:
        logging.error(f"Error updating legal texts: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update legal texts")

# Content endpoints
@api_router.get("/content/{section}")
async def get_content_by_section(section: str):
    """Get content by section name"""
    try:
        content = await db_service.get_content_by_section(section)
        if not content:
            raise HTTPException(status_code=404, detail=f"Content not found for section: {section}")
        return clean_mongo_document(content)
    except HTTPException:
        raise
    except Exception as e:
        logging.error(f"Error getting content for section {section}: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to get content")

@api_router.get("/content")
async def get_all_content():
    """Get all content sections"""
    try:
        content_list = await db_service.get_all_content()
        return [clean_mongo_document(content) for content in content_list]
    except Exception as e:
        logging.error(f"Error getting all content: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to get content")

@api_router.put("/content/{section}")
async def update_content(section: str, content_data: ContentUpdate):
    """Update content for a specific section"""
    try:
        if not content_data.content:
            raise HTTPException(status_code=400, detail="Content data is required")
        
        updated_content = await db_service.update_content(section, content_data.content)
        return clean_mongo_document(updated_content)
    except HTTPException:
        raise
    except Exception as e:
        logging.error(f"Error updating content for section {section}: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update content")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
