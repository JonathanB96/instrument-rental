# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Family.create(name: 'band')
Family.create(name: 'orchestra')
Family.create(name: 'guitar')

Instrument.create(
name: "Alto Saxophone",
description: Faker::Lorem.paragraph,
price: rand(15..35),
quantity: rand(15..35) ,
image_url: "https://drive.google.com/uc?id=19IMoEtkth1tBHy3M3-M6srmYlTp-Hzw9
", 
family_id: 1
)

Instrument.create(
name: "Baritone",
description: Faker::Lorem.paragraph,
price: rand(15..35),
quantity: rand(15..35) ,
image_url: "https://drive.google.com/uc?id=1HbSuCUEi7fISoXPD3w2Lj5ig-4-fIilj
", 
family_id: 1
)
Instrument.create(
name: "Bass Clarinet",
description: Faker::Lorem.paragraph,
price: rand(15..35),
quantity: rand(15..35),
image_url: "https://drive.google.com/uc?id=1Ldgs7_mBKfdEd0Z4_JupwH-HcdjOvu92
", 
family_id: 1
)
Instrument.create(
name: "Bells",
description: Faker::Lorem.paragraph,
price:rand(15..35) ,
quantity: rand(15..35),
image_url: "https://drive.google.com/uc?id=1WDbs54uqAXZC0N-kyxSI2AEvYM8s40E5", 
family_id: 1
)
Instrument.create(
name: "Cello",
description: Faker::Lorem.paragraph,
price: rand(15..35),
quantity: rand(15..35),
image_url: "https://drive.google.com/uc?id=1Hz6TxjAkco6E4w96dS9mLG5aI8Qk0-lc", 
family_id: 2
)
Instrument.create(
name: "Clarinet",
description: Faker::Lorem.paragraph,
price: rand(15..35),
quantity: rand(15..35),
image_url: "https://drive.google.com/uc?id=1-FOAYxU-vsY48kpgUqvhT6tjOKi4KGk2
", 
family_id: 1
)
Instrument.create(
name: "Drum",
description: Faker::Lorem.paragraph,
price: rand(15..35),
quantity: rand(15..35),
image_url: "https://drive.google.com/uc?id=130xmg7Q2l1jsmj8PZGCNSUWlSLg1Gln4", 
family_id: 1
)
Instrument.create(
name: "Flute",
description: Faker::Lorem.paragraph,
price: rand(15..35),
quantity: rand(15..35),
image_url: "https://drive.google.com/uc?id=1wSsSiDEjwGm7KO14x-wQ_90yJUMAEFNm
", 
family_id: 1
)
Instrument.create(
name: "French Horn",
description: Faker::Lorem.paragraph,
price: rand(15..35),
quantity: rand(15..35),
image_url: "https://drive.google.com/uc?id=1LrX7rrmIO6W39kpYKjgJImpEj6PPYb6_
", 
family_id: 1
)
Instrument.create(
name: "Guitar",
description: Faker::Lorem.paragraph,
price: rand(15..35),
quantity: rand(15..35),
image_url: "https://drive.google.com/uc?id=15KMB4BbiF5VQLnpJvOGLtu_yfW9lT9R5", 
family_id: 3
)
Instrument.create(
name: "Oboe",
description: Faker::Lorem.paragraph,
price: rand(15..35),
quantity: rand(15..35),
image_url: "https://drive.google.com/uc?id=1PXTD7cq_TPRXhQNb7TzcPAKImCACNggo
", 
family_id: 1 
)
Instrument.create(
name: "Trumpet",
description: Faker::Lorem.paragraph,
price: rand(15..35),
quantity: rand(15..35),
image_url: "https://drive.google.com/uc?id=1rr3z9qVyXk9hfhzFM5HEnEGbo6pMDWKQ", 
family_id: 1
)

Instrument.create(
name: "Viola",
description: Faker::Lorem.paragraph,
price: rand(15..35),
quantity: rand(15..35),
image_url: "https://drive.google.com/uc?id=1Tihv3crikV9wvtMPU_W3asQFbQuXGI8M", 
family_id: 2
)

Instrument.create(
name: "Violin",
description: Faker::Lorem.paragraph,
price: rand(15..35),
quantity: rand(15..35),
image_url: "https://drive.google.com/uc?id=1dMhML3jH3j3XWIPT5Vz82KhBkrOJ0Dal", 
family_id: 2
)

