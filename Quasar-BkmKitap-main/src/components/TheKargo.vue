<template>
  <div style="display: flex;">
    <div style=" border-top-right-radius: 21px; border-top-left-radius:41px ; margin-left: 100px;height: 600px;width: 230px; border: 1px solid #e5e5e5; margin-top: 5%; margin-right: 10px;">
      <p class="clickable-paragraph" style="background-color: red; font-size: 21px;width: 230px; text-align: center;color: white;padding-top: 10px;padding-bottom:5px; border-top-right-radius: 21px; border-top-left-radius:21px ;">Hesabım</p>
      <p class="clickable-paragraph" style="color: #2c2a28;padding-top: 10px;font-size: 14px;margin-left: 15px;">Siparişlerim</p>
      <p class="clickable-paragraph" style="color: #2c2a28;padding-top: 10px;font-size: 14px;margin-left: 15px;">Kişisel Bilgilerim</p>
      <p class="clickable-paragraph" style="color: #2c2a28;padding-top: 10px;font-size: 14px;margin-left: 15px;;">Listelerim</p>
      <p class="clickable-paragraph" style="color: #2c2a28;padding-top: 10px;font-size: 14px;margin-left: 15px;">Hediye Çeklerim</p>
      <p class="clickable-paragraph" style="color: #2c2a28;padding-top: 10px;font-size: 14px;margin-left: 15px;">Puanlarım</p>
      <p class="clickable-paragraph" style="color: #2c2a28;padding-top: 10px;font-size: 14px;margin-left: 15px;">Adres Bilgilerim</p>
      <p class="clickable-paragraph" style="color: #2c2a28;padding-top: 10px;font-size: 14px;margin-left: 15px;">Mesajlarım</p>
      <p class="clickable-paragraph" style="color: #2c2a28;padding-top: 10px;font-size: 14px;margin-left: 15px;">Fiyat Alarm Listem</p>
      <p class="clickable-paragraph" style="color: #2c2a28;padding-top: 10px;font-size: 14px;margin-left: 15px;">Stok Alarm Listem</p>
      <p class="clickable-paragraph" style="color: #2c2a28;padding-top: 10px;font-size: 14px;margin-left: 15px;">Şifremi Değiştir</p>
      <p class="clickable-paragraph" style="color: #2c2a28;padding-top: 10px;font-size: 14px;margin-left: 15px;">Çıkış Yap</p>
    </div>
    <div style="display: block; margin-left: 27px;width: min-content;margin-top: 10px;">
      <p class="liste-button" style="width:1000px; border-bottom: 1px solid; margin-top: 10%;">Sipariş Listem</p>
      <div style="height: 60px;width: 1000px; border-bottom: 1px solid;display: flex;">
        <p style="font-size: 12px; margin-right: 20px; ">Sayın <b>YAVUZ DUMAN</b> Bugüne Kadar Verdiğiniz Tüm Siparişler Aşağıda Bulunmaktadır.</p>
        <q-button style="justify-content: end;height: 40px;" class="siparis-button">Sipariş Listem</q-button>
        <q-button style="background-color: rgb(83, 83, 83);border: none;cursor: pointer;" class="gecmis-siparis-button">Geçmiş Siparişlerim</q-button>
      </div>
      <q-title style="height: 70px;width: 1400px;font-size: 12px;"><b>Henüz hiç siparişiniz bulunmamaktadır...!!!</b></q-title>
    </div>    
  </div> 
</template>

<script>

</script>

<style scoped>
.clickable-paragraph {
  cursor: pointer;
  color: black;
}
.liste-button {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: flex;
  align-items: center;
  float: left;
  width: 100%;
  background: url('https://cdn.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/buton/firat/v4/cartOrder.png') no-repeat left 3px;
  padding-left: 25px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 27px;
  padding-bottom: 20px;
  color: #4a4a4a;
  border-bottom: solid 1px #e7e7e7;
}
.siparis-button {

  margin: 5px;
  font: inherit;
  vertical-align: baseline;
  transition-timing-function: cubic-bezier(0.200, 0.020, 0.200, 1.000);
  transition-duration: .5s;
  line-height: 30px;
  font-size: 14px;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  box-sizing: border-box;
  cursor: pointer;
  color: #3a3a3a;
  border:  1px solid #f1f1f1;
  float: right;
}

.gecmis-siparis-button {
 
  margin: 10px;
  margin-top: 5px;

  font: inherit;
  vertical-align: baseline;
  transition-timing-function: cubic-bezier(0.200, 0.020, 0.200, 1.000);
  transition-duration: .5s;
  line-height: 30px;
  font-size: 14px;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid #f1f1f1;
  float: right;
  color: #fff;
  background-color: #5c5c5c;
  border-color: #5c5c5c;
}
</style>
