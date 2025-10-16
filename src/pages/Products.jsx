import React, { useState } from "react";
import ProductsHero from "../Components/ProductsHero";
import { assets } from "../assets/global";
import ProductCategories from "../components/ProductCategories";
import ProductSubCategories from "../components/ProductSubCategories";
import ProductCards from "../components/ProductCards";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Wound Closure",
      description: "Precision tools designed for surgical excellence.",
      image: 'https://i.pinimg.com/1200x/75/fc/3c/75fc3ce099b661c9c5e3e056f3db2440.jpg',
      subcategories: [
        {
          id: 1,
          name: "Absorbable Sutures",
          description: "Various forceps for medical use.",
          image: "https://i.pinimg.com/1200x/8d/32/32/8d32323d33b6949c437fbcb4bba75430.jpg",
          products: [
            { title: "Surgicryl® 910", pdf: "https://www.sutures.be/wp-content/uploads/2018/10/Surgicryl_910.pdf" },
            { title: "Surgicryl® Rapid", pdf: "https://www.sutures.be/wp-content/uploads/2018/10/Surgicryl_RAPID-1.pdf" },
            { title: "Catgut Chrome", pdf: "https://www.sutures.be/wp-content/uploads/2018/10/Catgut_CHROM.pdf" },

          ],
        },
        {
          id: 2,
          name: "Non-Absorbable Sutures",
          description: "Various forceps for medical use.",
          image: "https://i.pinimg.com/1200x/75/3a/75/753a75b75b5871d7ff21859cd8e5a3f6.jpg",
          products: [
            { title: "Polypropylene", pdf: "https://www.sutures.be/wp-content/uploads/2018/10/DACLON.pdf" },
            { title: "Silk", pdf: "https://www.sutures.be/wp-content/uploads/2018/10/SILK.pdf" },
            { title: "Daclon", pdf: "https://www.sutures.be/wp-content/uploads/Polypropylene.pdf" },

          ],
        },
        {
          id: 3,
          name: "Ophthalmic Sutures",
          description: "Various forceps for medical use.",
          image: "https://i.pinimg.com/736x/e3/22/01/e32201efb56c6eee3abfb9dbd841e2e8.jpg",
          products: [
            { title: "Surgicryl® 910", pdf: "https://www.sutures.be/wp-content/uploads/2018/10/Ophthalmic_Surgicryl_910.pdf" },
            { title: "Daclon", pdf: "https://www.sutures.be/wp-content/uploads/2018/10/Ophthalmic_Daclon.pdf" },
          ],
        },
        {
          id: 4,
          name: "Skin Stapler",
          description: "Durable, precise surgical scissors.",
          image: 'https://i.pinimg.com/1200x/ce/b4/aa/ceb4aaf519dbd30f269c9a7f9c926c38.jpg',
          products: [
            { title: "Metzenbaum Scissors", pdf: "/pdfs/metzenbaum.pdf" },
            { title: "Mayo Scissors", pdf: "/pdfs/mayo.pdf" },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Airway Managment",
      description: "High-quality dental tools for professionals.",
      image: 'https://i.pinimg.com/1200x/fd/98/9b/fd989b22a2e8f08c2a696d1df6645636.jpg',
      subcategories: [
        {
          id: 1,
          name: "Tracheal Tubes",
          description: "Extraction and surgical dental forceps.",
          image: 'https://i.pinimg.com/736x/c2/55/36/c25536949c488d12912c4e8a05bd8b73.jpg',
          products: [
            { title: "Tracheal tube with low pressure cuff", pdf: "https://anwarsons.com/wp-content/uploads/2021/03/Tracheal-tube-with-low-pressure-cuff.pdf" },
            { title: "Reinforced tracheal tube", pdf: "https://anwarsons.com/wp-content/uploads/2021/03/Reinforced-tracheal-tube.pdf" },
            { title: "Suction lumen", pdf: "https://anwarsons.com/wp-content/uploads/2021/03/Tracheal-tube-with-suction-lumen.pdf" },
            { title: "Preformed tracheal tube, nasal", pdf: "https://anwarsons.com/wp-content/uploads/2021/03/Preformed-Tracheal-tube-nasal.pdf" },
            { title: "Preformed tracheal tube, oral", pdf: "https://anwarsons.com/wp-content/uploads/2021/03/Preformed-tracheal-tube-oral.pdf" },
            { title: "Microlaryngeal tracheal tube", pdf: "https://anwarsons.com/wp-content/uploads/2021/03/Microlaryngeal-Tracheal-tube.pdf" },
            { title: "Tracheal tube holder", pdf: "https://anwarsons.com/wp-content/uploads/2021/03/Tracheal-tube-holder.pdf" },
          ],
        },
        {
          id: 2,
          name: "Tracheostomy Tubes",
          description: "Precision examination tools.",
          image: 'https://i.pinimg.com/736x/84/7b/a7/847ba7107761475e20580888a550968e.jpg',
          products: [
            { title: "Fenestrated with changeable inner cannulas KAN", pdf: "https://anwarsons.com/wp-content/uploads/2021/03/Fenestrated-with-changeable-inner-cannulas-KAN.pdf" },
          ],
        },
        {
          id: 3,
          name: "Endobronchial tubes",
          description: "Precision examination tools.",
          image: 'https://i.pinimg.com/736x/d7/0a/04/d70a04edef55cb7f46da5d1899f044a1.jpg',
          products: [
            { title: "Double lumen bronchial tube – left sided", pdf: "https://anwarsons.com/wp-content/uploads/2021/03/Double-lumen-bronchial-tube-%E2%80%93-left-sided.pdf" },
            { title: "Double lumen bronchial tube – right sided", pdf: "https://anwarsons.com/wp-content/uploads/2021/03/Double-lumen-bronchial-tube-%E2%80%93-right-sided.pdf" },
          ],
        },
        {
          id: 4,
          name: "Closed Suction System",
          description: "not linked",
          image: 'https://i.pinimg.com/1200x/3e/01/76/3e0176103e52e8c8eccfa00e6680f68c.jpg',
          products: [
            { title: "Explorer Probe", pdf: "/pdfs/probe.pdf" },
            { title: "Mouth Mirror", pdf: "/pdfs/mirror.pdf" },
          ],
        },
        {
          id: 5,
          name: "HiCapno",
          description: "not linked.",
          image: 'https://i.pinimg.com/736x/47/08/b3/4708b336d87226b859703efbd19f466a.jpg',
          products: [
            { title: "Explorer Probe", pdf: "/pdfs/probe.pdf" },
            { title: "Mouth Mirror", pdf: "/pdfs/mirror.pdf" },
          ],
        },
        {
          id: 6,
          name: "Silicone laryngeal mask",
          description: "not linked",
          image: 'https://i.pinimg.com/1200x/20/ad/40/20ad4015250eaaf12ee9498ca68bcf0a.jpg',
          products: [
            { title: "Explorer Probe", pdf: "/pdfs/probe.pdf" },
            { title: "Mouth Mirror", pdf: "/pdfs/mirror.pdf" },
          ],
        },
        {
          id: 7,
          name: "Introducers",
          description: "Precision examination tools.",
          image: 'https://i.pinimg.com/736x/91/a1/97/91a197e5586206041fd149f69a8d31e4.jpg',
          products: [
            { title: "Tracheal intubation stylet", pdf: "https://anwarsons.com/wp-content/uploads/2021/03/Tracheal-intubation-stylet.pdf" },
            { title: "Tracheal tube guide with ventilation lumen", pdf: "https://anwarsons.com/wp-content/uploads/2021/03/Tracheal_tube_guide_with_ventilation_lumen.pdf" },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Hemostasis",
      description: "Reliable instruments for orthopedic surgeries.",
      image: 'https://i.pinimg.com/1200x/02/a3/f0/02a3f0fa1bcc9949af2103b5b3fcd7dc.jpg',
      subcategories: [
        {
          id: 1,
          name: "Cutanplast",
          description: "Extraction and surgical dental forceps.",
          image: 'https://i.pinimg.com/736x/94/bc/85/94bc85c04a404965bd75028888dcb538.jpg',
          products: [
            { title: "Upper Molar Forceps", pdf: "/pdfs/uppermolar.pdf" },
            { title: "Lower Premolar Forceps", pdf: "/pdfs/lowerpremolar.pdf" },
          ],
        },
        {
          id: 2,
          name: "CUTANPLAST FAST®",
          description: "Precision examination tools.",
          image: 'https://i.pinimg.com/736x/36/4e/6d/364e6d0c7c812c15d9b4753960c886a2.jpg',
          products: [
            { title: "Explorer Probe", pdf: "/pdfs/probe.pdf" },
            { title: "Mouth Mirror", pdf: "/pdfs/mirror.pdf" },
          ],
        },
        {
          id: 3,
          name: "Emosist",
          description: "Precision examination tools.",
          image: 'https://i.pinimg.com/736x/f9/c1/67/f9c167d7625e8b15396bd610d56531da.jpg',
          products: [
            { title: "Explorer Probe", pdf: "/pdfs/probe.pdf" },
            { title: "Mouth Mirror", pdf: "/pdfs/mirror.pdf" },
          ],
        },
        {
          id: 4,
          name: "Bone Wax",
          description: "Precision examination tools.",
          image: 'https://i.pinimg.com/1200x/be/5a/6b/be5a6b8a3af2e0df0617cecfc8deda69.jpg',
          products: [
            { title: "Explorer Probe", pdf: "/pdfs/probe.pdf" },
            { title: "Mouth Mirror", pdf: "/pdfs/mirror.pdf" },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Energy Products",
      description: "Reliable instruments for orthopedic surgeries.",
      image: 'https://i.pinimg.com/736x/bc/b6/b7/bcb6b778e4b8efc250337b05cfdd47d2.jpg',
      subcategories: [
        {
          id: 1,
          name: "Ultrasonic Surgical System",
          description: "Strong and precise bone-cutting tools.",
          image: 'https://i.pinimg.com/736x/29/c4/84/29c4842ccb99beadf99afc8206649fd4.jpg',
          products: [
            { title: "Liston Bone Cutter", pdf: "/pdfs/liston.pdf" },
            { title: "Luer Bone Cutter", pdf: "/pdfs/luer.pdf" },
          ],
        },

      ],
    },
    {
      id: 5,
      name: "Hernia Repair",
      description: "Reliable instruments for orthopedic surgeries.",
      image: 'https://i.pinimg.com/1200x/98/23/57/982357b4b4f9784c7f01961035605387.jpg',
      subcategories: [
        {
          id: 1,
          name: "Polypropylene Mesh",
          description: "Strong and precise bone-cutting tools.",
          image: 'https://i.pinimg.com/1200x/22/31/52/2231524aace2a5278ed72e5febcea5b2.jpg',
          products: [
            { title: "Liston Bone Cutter", pdf: "/pdfs/liston.pdf" },
            { title: "Luer Bone Cutter", pdf: "/pdfs/luer.pdf" },
          ],
        },

      ],
    },
    {
      id: 6,
      name: "Other Products",
      description: "Reliable instruments for orthopedic surgeries.",
      image: 'https://i.pinimg.com/736x/89/03/c2/8903c28366739cb3071e69794c934c15.jpg',
      subcategories: [
        {
          id: 1,
          name: "Surgical Blades",
          description: "Strong and precise bone-cutting tools.",
          image: 'https://i.pinimg.com/1200x/88/ce/43/88ce43eba7536f3f9363f03ab0b59afb.jpg',
          products: [
            { image: 'https://i.pinimg.com/736x/89/03/c2/8903c28366739cb3071e69794c934c15.jpg', title: "Liston Bone Cutter", pdf: "/pdfs/liston.pdf" },
            { title: "Luer Bone Cutter", pdf: "/pdfs/luer.pdf" },
          ],
        },
        {
          id: 2,
          name: "Anti-Embolism Hosiery",
          description: "Sturdy retractors for surgical exposure.",
          image: 'https://i.pinimg.com/1200x/76/49/86/7649868818c214a1db990a77e0278879.jpg',
          products: [
            { title: "Hohmann Retractor", pdf: "/pdfs/hohmann.pdf" },
            { title: "Langenbeck Retractor", pdf: "/pdfs/langenbeck.pdf" },
          ],
        },
        {
          id: 3,
          name: "Soft Cervical Collar",
          description: "Sturdy retractors for surgical exposure.",
          image: 'https://i.pinimg.com/1200x/f5/c8/21/f5c821c869acfa4bc2e28b320940dc11.jpg',
          products: [
            { title: "Hohmann Retractor", pdf: "/pdfs/hohmann.pdf" },
            { title: "Langenbeck Retractor", pdf: "/pdfs/langenbeck.pdf" },
          ],
        },
      ],
    },

  ];


  return (
    <div className="overflow-hidden">
      <ProductsHero />

      {!selectedCategory && (
        <ProductCategories
          categories={categories}
          onSelect={setSelectedCategory}
        />
      )}

      {selectedCategory && !selectedSubCategory && (
        <ProductSubCategories
          category={selectedCategory}
          onBack={() => setSelectedCategory(null)}
          onSelectSub={setSelectedSubCategory}
        />
      )}

      {selectedSubCategory && (
        <ProductCards
          subcategory={selectedSubCategory}
          onBack={() => setSelectedSubCategory(null)}
        />
      )}
    </div>
  );
};

export default Products;
