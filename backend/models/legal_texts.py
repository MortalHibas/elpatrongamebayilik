from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class LegalTexts(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    terms: str = Field(default="Bu metin hizmet şartlarını içerir...")
    privacy: str = Field(default="Bu metin gizlilik politikasını içerir...")
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class LegalTextsCreate(BaseModel):
    terms: Optional[str] = None
    privacy: Optional[str] = None

class LegalTextsUpdate(BaseModel):
    terms: Optional[str] = None
    privacy: Optional[str] = None