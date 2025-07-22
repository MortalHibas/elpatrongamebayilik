from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from datetime import datetime
import uuid

class Content(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    section: str = Field(..., description="Section name: hero, features, pricing, etc.")
    content: Dict[str, Any] = Field(..., description="JSON content specific to section")
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class ContentCreate(BaseModel):
    section: str
    content: Dict[str, Any]

class ContentUpdate(BaseModel):
    content: Optional[Dict[str, Any]] = None