from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, action
from .models import Report
from .serializers import ReportSerializer
import joblib, os
from django.conf import settings

class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all().order_by('-created_at')
    serializer_class = ReportSerializer

@api_view(['POST'])
def ml_predict(request):
    # simple wrapper: loads ml_model/model.pkl
    model_path = os.path.join(settings.BASE_DIR, '..', 'ml_model', 'model.pkl')
    if not os.path.exists(model_path):
        return Response({'error':'model not found on server'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    model = joblib.load(model_path)
    text = request.data.get('description','')
    # here we use a naive featurization: length and presence of keywords
    features = []
    keywords = ['accident','medical','fire','police','injury','collapse']
    features.append(len(text))
    for kw in keywords:
        features.append(1 if kw in text.lower() else 0)
    pred = model.predict([features])[0]
    return Response({'prediction': pred})