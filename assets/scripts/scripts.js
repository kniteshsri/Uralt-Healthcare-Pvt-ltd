        // Mobile menu toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.getElementById('nav').classList.toggle('active');
        });

        // Page navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetPage = this.getAttribute('data-page');
                
                // Hide all pages
                document.querySelectorAll('.page').forEach(page => {
                    page.classList.remove('active');
                });
                
                // Show target page
                document.getElementById(targetPage).classList.add('active');
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
                
                // Scroll to top
                window.scrollTo(0, 0);
                
                // Close mobile menu if open
                document.getElementById('nav').classList.remove('active');
            });
        });

        // Product filtering functionality
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Show all products if filter is 'all'
                if (filter === 'all') {
                    document.querySelectorAll('.product-card').forEach(card => {
                        card.style.display = 'block';
                    });
                } else {
                    // Hide all products first
                    document.querySelectorAll('.product-card').forEach(card => {
                        card.style.display = 'none';
                    });
                    
                    // Show products that match the filter
                    document.querySelectorAll(`.product-card[data-specialties*="${filter}"]`).forEach(card => {
                        card.style.display = 'block';
                    });
                }
            });
        });

        // Product detail modals
        const productData = {
            'uradom-e': {
                name: 'Uradom E',
                image: 'assets/images/Cap-Uradom-E.jpg',
                description: 'Esomeprazole Magnesium Trihydrate 40 mg + Domperidone 30 mg',
                composition: 'Esomeprazole Magnesium Trihydrate 40 mg, Domperidone 30 mg',
                indications: 'Peptic Ulcer, Ulcer, Nausea and Vomiting, Irritable bowel Syndrome',
                benefits: [
                    'Early response in erosive esophagitis compared to omeprazole',
                    'Early response in chronic heart burn',
                    'Well tolerated',
                    'Significantly greater control of moderate to severe GERD',
                    'Improves motility & gastric emptying rate',
                    'Restores peristalsis to control gastric reflux',
                    'Prevents nausea and vomiting'
                ],
                dosage: 'As prescribed by the physician'
            },
            'profe': {
                name: 'Profe',
                image: 'assets/images/Cap-Profe.jpg',
                description: 'Lactobacillus acidophilus 0.5 billion CFU + Lactobacillus plantarum 0.5 billion CFU + Lactobacillus gasseri 0.5 billion CFU + Lactobacillus fermentum 0.5 billion CFU',
                composition: 'Lactobacillus acidophilus, Lactobacillus plantarum, Lactobacillus gasseri, Lactobacillus fermentum',
                indications: 'Vaginal Infections, Prophylactic During Pregnancy',
                benefits: [
                    'Restores & Maintains Vaginal Flora',
                    'Colonizes in vagina through translocation from rectum',
                    'Produces Lactic acid, H₂O₂, Bacteriocins that kill pathogens',
                    'Normalizes vaginal pH & prevents recurrence',
                    'Reduces vaginal itching, abnormal discharge & abnormal odour',
                    'Safe During Pregnancy - Reduces chances of Pre-term birth',
                    'Evaluated in > 1400 Indian Women with 64% reduction in vaginal itching at Day 10',
                    '50% reduction in vaginal discharge at Day 10'
                ],
                dosage: 'Vaginal Infection: 1 Cap BID for minimum 1 month. Pregnancy: 1 Cap OD for 10 days each month till delivery.'
            },
            'urodom-p': {
                name: 'Urodom P',
                image: 'assets/images/Cap-Urodom-P.jpg',
                description: 'Pantoprazole 40 mg and Domperidone 30 mg Capsules',
                composition: 'Pantoprazole 40 mg, Domperidone 30 mg',
                indications: 'Acid Peptic Disorder, Chronic Gastritis, GERD, Post Operative, Nausea & Vomiting',
                benefits: [
                    'Prompt, powerful & precise proton pump inhibitor',
                    'Inhibits only the active site of acid production',
                    'An effective and well-tolerated choice for providing symptom relief of patients with GERD',
                    'A pro-kinetic and anti-emetic',
                    'Effective for the treatment of dyspepsia, as well as nausea and vomiting due to various conditions',
                    'Better Patient Compliance Due to Convenient OD Dosage',
                    'Proven Cardiac Safety',
                    'Least Drug Interaction'
                ],
                dosage: 'As prescribed by the physician'
            },
            'prebirth': {
                name: 'Prebirth SR 200',
                image: 'assets/images/Tab-Prebirth-SR-200.jpg',
                description: 'Natural Micronised Progesterone Sustained Release Tablets 200 mg',
                composition: 'Natural Micronised Progesterone 200 mg',
                indications: 'Premenstrual syndrome, Preterm Delivery, Threatened abortion, Luteal support during assisted Reproductive Techniques, Luteal Phase defects',
                benefits: [
                    'Potent multi-faceted endocrine agent with an expanding therapeutic profile',
                    'Results in maintenance of pregnancy',
                    'Reduces menstrual problems during hormone replacement therapy in post-menopausal women',
                    'Better alternative than medroxyprogesterone acetate in terms of efficacy and safety'
                ],
                dosage: 'As prescribed by the physician'
            },
            'ecot-mr': {
                name: 'Ecot-MR',
                image: 'assets/images/Tab-Ecot-MR.jpg',
                description: 'Etoricoxib 60 mg + Thiocolchicoside 4 mg Tablets',
                composition: 'Etoricoxib 60 mg, Thiocolchicoside 4 mg',
                indications: 'Ankylosing spondylitis, Acute Pain, Chronic Low Back Pain, Rheumatoid arthritis, Acute Gouty arthritis',
                benefits: [
                    'Relieves pain, swelling, stiffness and other symptoms of inflammation',
                    'Muscle relaxant, anti-inflammatory & analgesic treats painful muscle contractions',
                    'Produces muscle relaxation without any sedative side-effects'
                ],
                dosage: 'As prescribed by the physician'
            },
            'uracal-forte': {
                name: 'Uracal Forte',
                image: 'assets/images/Cap-Uracel-Forte.jpg',
                description: 'Complete bone health supplement with Omega-3, Calcium, and essential vitamins',
                composition: 'Omega-3 Fatty Acid Providing EPS 90 mg, DHA 60 mg, L-Methyl folate 1 mg, Vitamin K2-7 45 mcg, Methylcobalamin 1500 mcg, Pyridoxal-5-Phosphate 0.5 mg, Lycopene 6% 10000 mcg, Calcium Citrate 500 mg, Calcitrol 0.25 mcg, Magnesium Sulphate 50 mg',
                indications: 'Bone health, Calcium and Vitamin D deficiency, General health maintenance',
                benefits: [
                    'Improves capillary circulation and acts as a blood thinner, which benefits brain & heart',
                    'Interferes with PAF (Platelet Activating Factor) which has shown to possibly cause asthma, heart disease, hearing disorders & skin disorders like psoriasis',
                    'Helps stop the damage to organs and tissues by free radicals',
                    'Good antioxidant & free radical scavenger',
                    'Improves memory & brain function & helps to preserve general health & vitality'
                ],
                dosage: 'As prescribed by the physician'
            },
            'tnib-jak': {
                name: 'Tnib-Jak',
                image: 'assets/images/Tab-Tnib-Jak.jpg',
                description: 'Tofacitinib Citrate 5 mg Tablets',
                composition: 'Tofacitinib Citrate 5 mg',
                indications: 'Rheumatoid Arthritis, Psoriatic Arthritis, Ulcerative Colitis, Psoriasis, Ankylosing Spondylitis, Vitiligo, Atopic dermatitis',
                benefits: [
                    'The NIH covid 19 guidelines recommend tofacitinib as an alternative to baricitinib for the treatment of covid 19',
                    'Reduces joint pain, swelling and further joint damage in Rheumatoid Arthritis',
                    'Approved for adults with active Psoriatic Arthritis in which methotrexate did not work'
                ],
                dosage: 'As prescribed by the physician'
            },
            'tyga-60k': {
                name: 'Tyga 60K',
                image: 'assets/images/Shot-Tyga-60K.jpg',
                description: 'Cholecalciferol 60000 IU Oral Solution (Nano Shot)',
                composition: 'Cholecalciferol (Vitamin D3) 60000 IU',
                indications: 'Rickets, Osteoporosis, Osteomalacia, Fracture, Bone & Muscle Pain',
                benefits: [
                    'The rapid calcium conservation',
                    'Improves absorption & functioning of calcium',
                    'Ensures bone mineralization, induces muscle cell growth',
                    'Reduces bone & muscle pain, improves skeletal muscle functions'
                ],
                dosage: 'As prescribed by the physician'
            }
        };

        // Open product modal
        document.querySelectorAll('.view-product').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const productId = this.getAttribute('data-product');
                const product = productData[productId];
                
                if (product) {
                    document.getElementById('modal-product-name').textContent = product.name;
                    
                    let modalContent = `
                        <div class="modal-product">
                            <div class="modal-product-img">
                                <img src="${product.image}" alt="${product.name}">
                            </div>
                            <div class="modal-product-info">
                                <h3>${product.name}</h3>
                                <p>${product.description}</p>
                                
                                <div class="product-specs">
                                    <h4>Composition</h4>
                                    <p>${product.composition}</p>
                                    
                                    <h4>Indications</h4>
                                    <p>${product.indications}</p>
                                    
                                    <h4>Benefits</h4>
                                    <ul>
                                        ${product.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                                    </ul>
                                    
                                    <h4>Dosage</h4>
                                    <p>${product.dosage}</p>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    document.getElementById('modal-product-content').innerHTML = modalContent;
                    document.getElementById('product-modal').style.display = 'block';
                }
            });
        });

        // Close modal
        document.querySelector('.close-modal').addEventListener('click', function() {
            document.getElementById('product-modal').style.display = 'none';
        });

        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target === document.getElementById('product-modal')) {
                document.getElementById('product-modal').style.display = 'none';
            }
        });

        // Contact form validation
        if (document.getElementById('contactForm')) {
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                let name = document.getElementById('name').value;
                let email = document.getElementById('email').value;
                let subject = document.getElementById('subject').value;
                let message = document.getElementById('message').value;
                
                if (name && email && subject && message) {
                    alert('Thank you for your message. We will get back to you soon!');
                    this.reset();
                } else {
                    alert('Please fill all required fields');
                }
            });
        }