from django.db import models
from django.utils import timezone
class DevotteeTable(models.Model):
    id=models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    land=models.FloatField()
   
    def __str__(self):
        return self.name

class payment_table(models.Model):
    
    name=models.ForeignKey(DevotteeTable,on_delete=models.CASCADE)
    amtperacre=models.IntegerField(default=1000)
   
    amtpaiddetails=models.JSONField(default=list)

class templeexpenses(models.Model):
    # id=models.AutoField()
    comitteemember=models.CharField(max_length=100)
    expensetype=models.CharField(max_length=100)
    expenseamount=models.IntegerField()
    
    
    
