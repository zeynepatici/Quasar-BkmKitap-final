<template>
  <div style="display: flex;">
    <div style="margin-top: 50px; height: 360px; width: 880px;margin-left: 50px; " class="display:flex">
    <div class="row" >
      <div class="col-2" style="border-left: solid 1px;border-bottom: solid 1px;border-top: solid 1px; height: 30px;">Ürün</div>
      <div class="col-4" style="border-bottom: solid 1px;border-top: solid 1px;">Ürün adı</div>
      <div class="col-3" style="border-bottom: solid 1px;border-top: solid 1px;">Miktar</div>
      <div class="col-2" style="border-bottom: solid 1px;border-top: solid 1px;">Toplam Tutar</div>
      <div class="col-1" style="border-bottom: solid 1px;border-top: solid 1px;border-right: solid 1px;">Sil</div>
      
    </div>
    <div class="row" >
      <div class="col-2" style="margin-top: 30px;"><img src="https://cdn.bkmkitap.com/hayvan-ciftligi-513890-9499723-51-K.jpg" height="126px" width="90px" alt=""></div>
      <div class="col-4" >
        <p style="margin-top: 30px;font-size: 14px;"><b>Hayvan Çiftliği</b></p><br>
        <span style="color: #e30613;font-size: 10px;">İŞ BANKASI KÜLTÜR YAYINLARI</span><br>
        <span style="color: #e30613; font-size: 10px;">GEORGE ORWELL</span>
      </div>
      <div class="col-3" >
        <div class="q-pa-md" style="margin-top: 50px;">
          <q-input
          v-model.number="model"
          type="number"
          filled
          style="max-width: 50px"
          />
        </div>
      </div>
      <div class="col-2" >
        <div style="margin-top: 70px;">
          <span style="font-size: 14px;"><b>28,00 TL</b></span>
          <span style="font-size: 16px; color:#e30613;"><b>    %35</b></span>
        </div>
        <q-button style="width: 100px;border-radius: 5px;color:white; background-color: #e4002b;;">
          18,20 TL
        </q-button>
      </div>
      <div class="col-1" style="margin-top: 80px;font-size: 10px;">
        <q-button>Kaldır</q-button>
      </div>
    </div>
  </div>

    <q-card class="card" style="height: 450px; margin: 15px; width: 350px; border:none;">
      <q-card-section>
        <div class="row items-center">
          <div class="col-9" style="margin-top:50px;height: 400px;width: 300px;border-top: solid 1px;">
            <div id="salebox" style="border-right: 1px solid;border-left: solid 1px; border-bottom: 1px solid;">
              <q-input  outlined placeholder="Kupon/Hediye Kartı Kodunuz" v-model="couponCode" style="display: inline-flex;align-items: center; font-size: 11px; width: 200px;"></q-input>
              <q-btn @click="applyCoupon" class="small-button" label="Uygula"></q-btn>
            </div>
            <q-col class="custom-column p-right col-12">
              <!-- Sepet Toplamı -->
              <q-card style="height: 40px; border-radius: 0;">
                <div class="row box-border" style="margin-left: 3px;">
                  <div class="col btn-big col-6 colorGrayRegular" style="margin-top:10px;">
                    Sepet Toplamı
                  </div>
                  <div class="col btn-big col-6 text-right colorGrayBold" style="margin-top:10px;">
                    18,20 TL
                  </div>
                </div>
              </q-card>
              <q-card style="height: 40px;border-radius: 0;">
                <!-- Genel Toplam -->
                <div class="row mb box-border b-top" style="margin-left: 3px;">
                  <div class="col btn-big col-6 colorGrayBold" style="margin-top:10px;">
                    Genel Toplam
                  </div>
                  <div class="col btn-big col-6 text-right orderGenelToplam" style="margin-top:10px; color: #e30613; font-weight: bolder;">
                    18,20 TL
                  </div>
                </div>
              </q-card>
              <q-item-section style="text-align: center;margin: 5px;">
                Sepetinizde değişiklik yaptıysanız güncellemeyi unutmayın. Ödeme ve onay sayfasına kadar satın alma işleminizi iptal edebilirsiniz.
              </q-item-section>
              <div class="col-3">
              <q-btn
                color= "red-14"
                label="ÖDEMEYE GİT"
                class="full-width q-mt-md"
              />
              <q-btn
                color= "white"
                text-color="red-14"
                border-color="red-14"
                border-radius="2px"
                label="Sepeti Güncelle"
                class="full-width q-mt-md"
              />
          </div>
            </q-col>
          </div>
          
        </div>
      </q-card-section>
    </q-card>

  </div>



</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref(1)
    }
  }
}
</script>

<style>
.custom-column {
  padding-right: 0px !important;
  visibility: visible;
  box-sizing: border-box;
  margin: 5px;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: middle;
  float: inherit;
  width: 100%;
}
</style>