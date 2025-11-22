from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReportViewSet, ml_predict

router = DefaultRouter()
router.register('reports', ReportViewSet, basename='reports')

urlpatterns = [
    path('', include(router.urls)),
    path('ml/predict/', ml_predict),
]