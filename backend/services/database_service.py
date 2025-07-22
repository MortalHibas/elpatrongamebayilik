from motor.motor_asyncio import AsyncIOMotorClient
import os
from typing import Optional, Dict, Any, List
from datetime import datetime

class DatabaseService:
    def __init__(self, db):
        self.db = db
        self.settings_collection = db.settings
        self.package_links_collection = db.package_links
        self.legal_texts_collection = db.legal_texts
        self.content_collection = db.content

    # Settings operations
    async def get_settings(self) -> Optional[Dict[str, Any]]:
        """Get current settings, create default if none exists"""
        settings = await self.settings_collection.find_one()
        if not settings:
            # Create default settings
            default_settings = {
                "popularPackageIndex": 1,
                "whatsappNumber": "905551234567",
                "heroBackgroundImage": "",
                "ctaBackgroundImage": "",
                "showDiscounts": True,
                "discountText": "Özel İndirim: İlk Ay %50",
                "finalDiscountText": "⚡ Sınırlı Süre: İlk 100 Kayıt %50 İndirim",
                "createdAt": datetime.utcnow(),
                "updatedAt": datetime.utcnow()
            }
            result = await self.settings_collection.insert_one(default_settings)
            default_settings["_id"] = result.inserted_id
            return default_settings
        return settings

    async def update_settings(self, settings_data: Dict[str, Any]) -> Dict[str, Any]:
        """Update settings"""
        settings_data["updatedAt"] = datetime.utcnow()
        
        # Check if settings exist
        existing = await self.settings_collection.find_one()
        if existing:
            await self.settings_collection.update_one(
                {"_id": existing["_id"]},
                {"$set": settings_data}
            )
            return await self.settings_collection.find_one({"_id": existing["_id"]})
        else:
            # Create new settings
            settings_data["createdAt"] = datetime.utcnow()
            result = await self.settings_collection.insert_one(settings_data)
            return await self.settings_collection.find_one({"_id": result.inserted_id})

    # Package Links operations
    async def get_package_links(self) -> Optional[Dict[str, Any]]:
        """Get package links, create default if none exists"""
        package_links = await self.package_links_collection.find_one()
        if not package_links:
            # Create default package links
            default_links = {
                "basic": "#basic-package",
                "orta": "#orta-package", 
                "luks": "#luks-package",
                "createdAt": datetime.utcnow(),
                "updatedAt": datetime.utcnow()
            }
            result = await self.package_links_collection.insert_one(default_links)
            default_links["_id"] = result.inserted_id
            return default_links
        return package_links

    async def update_package_links(self, links_data: Dict[str, Any]) -> Dict[str, Any]:
        """Update package links"""
        links_data["updatedAt"] = datetime.utcnow()
        
        # Check if package links exist
        existing = await self.package_links_collection.find_one()
        if existing:
            await self.package_links_collection.update_one(
                {"_id": existing["_id"]},
                {"$set": links_data}
            )
            return await self.package_links_collection.find_one({"_id": existing["_id"]})
        else:
            # Create new package links
            links_data["createdAt"] = datetime.utcnow()
            result = await self.package_links_collection.insert_one(links_data)
            return await self.package_links_collection.find_one({"_id": result.inserted_id})

    # Legal Texts operations
    async def get_legal_texts(self) -> Optional[Dict[str, Any]]:
        """Get legal texts, create default if none exists"""
        legal_texts = await self.legal_texts_collection.find_one()
        if not legal_texts:
            # Create default legal texts
            default_texts = {
                "terms": "Bu metin hizmet şartlarını içerir...",
                "privacy": "Bu metin gizlilik politikasını içerir...",
                "createdAt": datetime.utcnow(),
                "updatedAt": datetime.utcnow()
            }
            result = await self.legal_texts_collection.insert_one(default_texts)
            default_texts["_id"] = result.inserted_id
            return default_texts
        return legal_texts

    async def update_legal_texts(self, texts_data: Dict[str, Any]) -> Dict[str, Any]:
        """Update legal texts"""
        texts_data["updatedAt"] = datetime.utcnow()
        
        # Check if legal texts exist
        existing = await self.legal_texts_collection.find_one()
        if existing:
            await self.legal_texts_collection.update_one(
                {"_id": existing["_id"]},
                {"$set": texts_data}
            )
            return await self.legal_texts_collection.find_one({"_id": existing["_id"]})
        else:
            # Create new legal texts
            texts_data["createdAt"] = datetime.utcnow()
            result = await self.legal_texts_collection.insert_one(texts_data)
            return await self.legal_texts_collection.find_one({"_id": result.inserted_id})

    # Content operations
    async def get_content_by_section(self, section: str) -> Optional[Dict[str, Any]]:
        """Get content by section name"""
        return await self.content_collection.find_one({"section": section})

    async def get_all_content(self) -> List[Dict[str, Any]]:
        """Get all content sections"""
        cursor = self.content_collection.find()
        return await cursor.to_list(length=None)

    async def update_content(self, section: str, content_data: Dict[str, Any]) -> Dict[str, Any]:
        """Update content for a specific section"""
        update_data = {
            "content": content_data,
            "updatedAt": datetime.utcnow()
        }
        
        # Check if content exists for this section
        existing = await self.content_collection.find_one({"section": section})
        if existing:
            await self.content_collection.update_one(
                {"section": section},
                {"$set": update_data}
            )
            return await self.content_collection.find_one({"section": section})
        else:
            # Create new content
            new_content = {
                "section": section,
                "content": content_data,
                "createdAt": datetime.utcnow(),
                "updatedAt": datetime.utcnow()
            }
            result = await self.content_collection.insert_one(new_content)
            return await self.content_collection.find_one({"_id": result.inserted_id})