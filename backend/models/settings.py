from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class Settings(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    popularPackageIndex: int = Field(default=1, ge=0, le=2)  # 0=Basic, 1=Orta, 2=Lüks
    whatsappNumber: str = Field(default="905551234567")
    heroBackgroundImage: str = Field(default="")
    ctaBackgroundImage: str = Field(default="")
    showDiscounts: bool = Field(default=True)
    discountText: str = Field(default="Özel İndirim: İlk Ay %50")
    finalDiscountText: str = Field(default="⚡ Sınırlı Süre: İlk 100 Kayıt %50 İndirim")
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class SettingsCreate(BaseModel):
    popularPackageIndex: Optional[int] = None
    whatsappNumber: Optional[str] = None
    heroBackgroundImage: Optional[str] = None
    ctaBackgroundImage: Optional[str] = None
    showDiscounts: Optional[bool] = None
    discountText: Optional[str] = None
    finalDiscountText: Optional[str] = None

class SettingsUpdate(BaseModel):
    popularPackageIndex: Optional[int] = None
    whatsappNumber: Optional[str] = None
    heroBackgroundImage: Optional[str] = None
    ctaBackgroundImage: Optional[str] = None
    showDiscounts: Optional[bool] = None
    discountText: Optional[str] = None
    finalDiscountText: Optional[str] = None