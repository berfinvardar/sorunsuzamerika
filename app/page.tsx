import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-4xl">
        <h1 className="text-center font-semibold pb-4 text-4xl"> Murat Turizm </h1>
        <Card className="w-full shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
              Amerika Birleşik Devletleri'ne Geçiş Süreci
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 sm:px-6 md:px-8">
            <Accordion type="single" collapsible className="w-full">
              {/* Ana Soru 1 */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg sm:text-xl font-semibold text-left">
                  Süreç tam olarak nasıl işleyecek?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 dark:text-gray-300 space-y-3 pl-2">
                  <p>
                    Türkiye'den ayrılmaya uygun olduğunuz tarih aralığını bize bildirdiğinizde, sorunsuz bir seyahat planı oluşturuyoruz.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Uçağa alınmama riskini ortadan kaldırmak için biletlerinizi güvenilir havayollarından, transit geçişlerinizi ise ret ihtimali olmayan aktarma noktalarından seçiyoruz.</li>
                    <li>Yolculuğunuz başladıktan sonra tüm işlemler boyunca sizinle iletişimde kalarak hiçbir sorun yaşamadığınızdan emin oluyoruz.</li>
                    <li>Meksika'ya giriş yaptıktan sonra, uygun olan havaalanından, ilgili tarih için en yakın sınır noktasına ret almadan iç uçuş yapabilmeniz için gerekli rezervasyonları, dönüş bildirgelerini ve protokolleri ayarlıyoruz.</li>
                    <li>Sınıra yakın bir sınır evine transferinizi sağladıktan sonra, eşlikçiniz ile birlikte geçiş için uygun olan zaman diliminde (genellikle 24 saat içinde) sınırı geçmenizi sağlıyoruz.</li>
                    <li>Sınırı geçtikten sonra, sizi Amerika tarafında bekleyen eskortlu transfer aracımızla Göçmenlik Ofisi'ne (iltica işlemlerinizi yapacak birim) götürüyoruz. Ofiste iltica sürecinizi başlatıp, ülke içinde serbest dolaşım hakkı tanıyan belgelerinizi alarak sürecinizi tamamlıyoruz.</li>
                  </ul>
                  <p className="font-semibold text-gray-800 dark:text-gray-100 pt-2">
                    Kamp süreci yaşamadan, kaçak statüde olmadan Amerika Birleşik Devletleri’nde serbestçe dolaşabiliyorsunuz.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Soru 2 */}
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg sm:text-xl font-semibold text-left">
                  Neden kamp süreci yaşamıyorum, kaçak sayılmıyorum?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 dark:text-gray-300 space-y-3 pl-2">
                   <ul className="list-disc list-inside space-y-2">
                    <li>Siz bir kaçak olarak yakalanmıyorsunuz ve Amerika’nın güvenliğinin sağlanması için kişi hakkında ön kontrollerin yapıldığı kamplara gönderilmenize gerek kalmıyor.</li>
                    <li>Amerika’da göçmen sayılabilmeniz için göçmenlik ofisinin sizin adınıza “Göçmen, geçici misafir vb.” sıfatlarda bir tanımlama yapması gerekmekte.</li>
                    <li>Bu tanımlama yapılmadan yani size verilen (A number /Parole/Temporary SSN/) gibi her dönemde değişen bir numaraya sahip olmadan bir polis kontrolüne denk gelmeniz durumunda kaçak sayılırsınız.</li>
                    <li>Sizin polis kontrolüne maruz kalmadan bu numaralardan birisine sahip olmanızı sağlıyoruz.</li>
                  </ul>
                   <p className="font-semibold text-gray-800 dark:text-gray-100 pt-2">
                    Bu sayede Amerika’da artık serbestçe dolaşan bir göçmen/süreci devam eden ilticacı oluyorsunuz.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Soru 3 */}
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg sm:text-xl font-semibold text-left">
                  Ödemeyi nasıl, nerede yapacağım?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 dark:text-gray-300 space-y-3 pl-2">
                   <ul className="list-disc list-inside space-y-2">
                    <li>Siz yolculuğa başlamadan herhangi bir ön ödeme almıyoruz, sizin adınıza ödenmesi gereken bilet ücretlerini, transit vize ücretlerini biz karşılıyoruz.</li>
                    <li>Sizin adınıza, sizin telefon numaranızla, sizin pasaport numaranızla ve sizin eposta adresinizle kestirdiğimiz (TAM ROTA) biletlerinizi teslim alıp uçağınıza bindikten sonra bilet ücretlerinin ödemesini yapıyorsunuz.</li>
                    <li>Sınırı geçip iltica işlemlerinizin başladığı, serbest dolaşıma yetki veren kağıdınızı teslim aldığınızda kalan ödemeyi yapyorsunuz.</li>
                  </ul>
                   <p className="font-semibold text-gray-800 dark:text-gray-100 pt-2">
                    Ödeme için kripto para transferi hem sizi hem de bizi koruyan ve bizim tercih ettiğimiz yol.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Soru 4 */}
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg sm:text-xl font-semibold text-left">
                  Tam olarak maliyeti nedir?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 dark:text-gray-300 space-y-3 pl-2">
                  <p>
                    Haziran 2025’den itibaren geçerli olan fiyatımız <strong>12.000 USD</strong>'dir.
                  </p>
                   <p>
                    Bu fiyata biletleriniz, vizeleriniz, sınır geçiş ücretiniz, iltica/göçmenlik işlemleriniz dahildir.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter className="text-center text-xs text-gray-500 dark:text-gray-400">
            <p>Tüm süreç boyunca yanınızdayız.</p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}