import {CustomerReview, Footer, HERO, PopularProducts, Services, SpecialOffer
,Subcribe, SuperQuality, NAV} from './NIKEWEBSITE'

const App = () => (
   <main className="relative">
         <NAV></NAV>
      <section className="xl:padding-l wide:padding-r padding-b">
         <HERO></HERO>
      </section>
      <section className="padding">
         <PopularProducts></PopularProducts>
      </section>
      <section className="padding">
         <SuperQuality></SuperQuality>
      </section>
      <section className="padding-x py-10">
         <Services></Services>
      </section>
      <section className="padding">
         <SpecialOffer></SpecialOffer>
      </section>
      <section className="padding bg-pale-blue">
         <CustomerReview></CustomerReview>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
         <Subcribe></Subcribe>
      </section>
      <section className="padding-x padding-t pb-8 bg-black ">
         <Footer></Footer>
      </section>
   </main>
);

export default App