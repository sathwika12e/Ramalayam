from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from . serializers import DevotteeSerializer,payment_serializer,templeexpenses_serializer
from .models import DevotteeTable ,payment_table,templeexpenses
from datetime import datetime
class devottedetails(APIView):
    def get(self,request,pk=None):
        if pk is not None:
            devottee_data=DevotteeTable.objects.get(id=pk)
            s_obj=DevotteeSerializer(devottee_data)
            return Response(s_obj.data)
        else:
            devottee_data=DevotteeTable.objects.all()
            s_obj=DevotteeSerializer(devottee_data,many=True)

                
        return Response(s_obj.data)
    def post(self,request):
        s_obj=DevotteeSerializer(data=request.data)
        if s_obj.is_valid():
            s_obj.save()
            return Response(s_obj.data)
        else:
            return Response(s_obj.errors)
    def put(self,request,pk):

        print("from pk",pk,"request-data",request.data)
        devottee_data=DevotteeTable.objects.get(id=pk)
        data=request.data
        s_obj=DevotteeSerializer(devottee_data,data=data)
      
        if s_obj.is_valid():
            s_obj.save()
            return Response(s_obj.data)
        else:
            return Response(s_obj.errors)

class payment_details_api(APIView):
    def get(self,request):
        payment_details=payment_table.objects.all()
        print(payment_details)
        for i in payment_details.values():
            print(i)
        s_obj=payment_serializer(payment_details,many=True)
        # print(s_obj.data)
        return Response(s_obj.data)
    def post(self,request):
        print(request.data)
        members_details=payment_table.objects.filter(name_id=int(request.data['name'])).first()
       
        details={
            'type':request.data['type'],
            'amt':int(request.data['amt']),
            'date-time':datetime.now().isoformat()
        }
        if members_details:
            members_details.amtpaiddetails.append(details)
            members_details.save()
            s_obj=payment_serializer(instance=members_details)
            return Response(s_obj.data)
        else:
            data={
                'name':int(request.data['name']),
                'amtpaiddetails':[details]}
            s_obj=payment_serializer(data=data)
            if s_obj.is_valid():
                s_obj.save()
                return Response(s_obj.data)
            else:
                return Response(s_obj.errors)
class Temple_expenses_api(APIView):
    def get(self,request):
        expenses_data=templeexpenses.objects.all()
        s_obj=templeexpenses_serializer(expenses_data,many=True)          
        return Response(s_obj.data)
    def post(self,request):
        data=request.data
        s_obj=templeexpenses_serializer(data=data)
        if s_obj.is_valid():
            s_obj.save()
            
            return Response("success")
        else:
            return Response("api fail")
        


    # def delete(self,request,pk):
    #     payment_details=payment_table.objects.get(pk.id)
    #     for i in payment_details.amtpaiddetails:
    #         if pk==i:
    #             payment_details.amtpaiddetails.remove(i)
    #     payment_details.save()

        
    #     return Response("Deleted successfully")
                
           
    
# {
#     "name":3,
# "amt":4500
# }
