from django.shortcuts import render,HttpResponse

# Create your views here.
def index(request,*args,**kwargs):
    return render(request,'frontend/index.html')