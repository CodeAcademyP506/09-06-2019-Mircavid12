function MobilePhone(name,model,charge,balance)
{
    this.ad = name;
    this.model = model;
    this.balans = balance;
    this.charge = charge;

    this.getInfo = function()
    {
        return "Phone Name: " + this.ad + " // " + "Model: " + this.model
    }
    this.getBalance = function()
    {
        return "Current Balance: " + this.balans;
    }

    this.chargeBalance  = function()
    {
        return "Charge Balance: " + this.charge;

    }
}

var Iphone = new MobilePhone("Iphone", "6S", "12%", "1.10Azn");
var Samsung = new MobilePhone("Samsung", "Galaxy Grand Prime", "98%", "3.12Azn");
var Xiaomi = new MobilePhone("Xiaomi", "Note 7", "73%", "0.95Azn");
var Huawei = new MobilePhone("Huawei", "Note 3", "61%", "2.47Azn");

console.log(Iphone.getInfo());
console.log(Iphone.getBalance());
console.log(Iphone.chargeBalance());