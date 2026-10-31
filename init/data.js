const listingsData = [
  {
    title: "Cozy Villa in Anjuna, Goa",
    discription: "A cozy villa tucked away in Anjuna, Goa, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 1500,
    location: "Anjuna, Goa",
    country: "India"
  },
  {
    title: "Luxury Apartment in Palolem, Goa",
    discription: "Wake up to beautiful views from this luxury apartment in Palolem, Goa. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 2200,
    location: "Palolem, Goa",
    country: "India"
  },
  {
    title: "Rustic Cabin in Manali, Himachal Pradesh",
    discription: "This rustic cabin in Manali, Himachal Pradesh is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 2900,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Modern Cottage in Shimla, Himachal Pradesh",
    discription: "Escape the city rush at this modern cottage in Shimla, Himachal Pradesh. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 3600,
    location: "Shimla, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Serene Treehouse in Rishikesh, Uttarakhand",
    discription: "Stay in the heart of Rishikesh, Uttarakhand at this serene treehouse. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 4300,
    location: "Rishikesh, Uttarakhand",
    country: "India"
  },
  {
    title: "Charming Farmhouse in Munnar, Kerala",
    discription: "A charming farmhouse with plenty of natural light and calm surroundings in Munnar, Kerala. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 5000,
    location: "Munnar, Kerala",
    country: "India"
  },
  {
    title: "Spacious Penthouse in Alleppey, Kerala",
    discription: "Handpicked spacious penthouse in Alleppey, Kerala — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 5700,
    location: "Alleppey, Kerala",
    country: "India"
  },
  {
    title: "Sunny Studio in Udaipur, Rajasthan",
    discription: "Experience Udaipur, Rajasthan like a local from this sunny studio. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 6400,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Peaceful Loft in Jaipur, Rajasthan",
    discription: "A peaceful loft tucked away in Jaipur, Rajasthan, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 7100,
    location: "Jaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Elegant Guesthouse in Jaisalmer, Rajasthan",
    discription: "Wake up to beautiful views from this elegant guesthouse in Jaisalmer, Rajasthan. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 7800,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Quaint Homestay in Coorg, Karnataka",
    discription: "This quaint homestay in Coorg, Karnataka is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 8500,
    location: "Coorg, Karnataka",
    country: "India"
  },
  {
    title: "Stylish Houseboat in Pondicherry",
    discription: "Escape the city rush at this stylish houseboat in Pondicherry. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 9200,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Private Chalet in Darjeeling, West Bengal",
    discription: "Stay in the heart of Darjeeling, West Bengal at this private chalet. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 9900,
    location: "Darjeeling, West Bengal",
    country: "India"
  },
  {
    title: "Scenic Mansion in Mumbai, Maharashtra",
    discription: "A scenic mansion with plenty of natural light and calm surroundings in Mumbai, Maharashtra. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 10600,
    location: "Mumbai, Maharashtra",
    country: "India"
  },
  {
    title: "Budget Tent in Lonavala, Maharashtra",
    discription: "Handpicked budget tent in Lonavala, Maharashtra — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 11300,
    location: "Lonavala, Maharashtra",
    country: "India"
  },
  {
    title: "Premium Villa in Nainital, Uttarakhand",
    discription: "Experience Nainital, Uttarakhand like a local from this premium villa. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 12000,
    location: "Nainital, Uttarakhand",
    country: "India"
  },
  {
    title: "Traditional Apartment in Varanasi, Uttar Pradesh",
    discription: "A traditional apartment tucked away in Varanasi, Uttar Pradesh, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 12700,
    location: "Varanasi, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Designer Cabin in Agra, Uttar Pradesh",
    discription: "Wake up to beautiful views from this designer cabin in Agra, Uttar Pradesh. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 13400,
    location: "Agra, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Hilltop Cottage in Srinagar, Kashmir",
    discription: "This hilltop cottage in Srinagar, Kashmir is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 14100,
    location: "Srinagar, Kashmir",
    country: "India"
  },
  {
    title: "Beachfront Treehouse in Bali",
    discription: "Escape the city rush at this beachfront treehouse in Bali. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 14800,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Cozy Farmhouse in Bangkok",
    discription: "Stay in the heart of Bangkok at this cozy farmhouse. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 15500,
    location: "Bangkok",
    country: "Thailand"
  },
  {
    title: "Luxury Penthouse in Tokyo",
    discription: "A luxury penthouse with plenty of natural light and calm surroundings in Tokyo. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 16200,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Rustic Studio in Paris",
    discription: "Handpicked rustic studio in Paris — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 16900,
    location: "Paris",
    country: "France"
  },
  {
    title: "Modern Loft in Santorini",
    discription: "Experience Santorini like a local from this modern loft. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 17600,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Serene Guesthouse in Rome",
    discription: "A serene guesthouse tucked away in Rome, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 18300,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Charming Homestay in Barcelona",
    discription: "Wake up to beautiful views from this charming homestay in Barcelona. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 19000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Spacious Houseboat in London",
    discription: "This spacious houseboat in London is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 19700,
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "Sunny Chalet in New York",
    discription: "Escape the city rush at this sunny chalet in New York. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 20400,
    location: "New York",
    country: "United States"
  },
  {
    title: "Peaceful Mansion in Dubai",
    discription: "Stay in the heart of Dubai at this peaceful mansion. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 21100,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Elegant Tent in Cape Town",
    discription: "A elegant tent with plenty of natural light and calm surroundings in Cape Town. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 21800,
    location: "Cape Town",
    country: "South Africa"
  },
  {
    title: "Quaint Villa in Anjuna, Goa",
    discription: "Handpicked quaint villa in Anjuna, Goa — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 22500,
    location: "Anjuna, Goa",
    country: "India"
  },
  {
    title: "Stylish Apartment in Palolem, Goa",
    discription: "Experience Palolem, Goa like a local from this stylish apartment. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 23200,
    location: "Palolem, Goa",
    country: "India"
  },
  {
    title: "Private Cabin in Manali, Himachal Pradesh",
    discription: "A private cabin tucked away in Manali, Himachal Pradesh, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 23900,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Scenic Cottage in Shimla, Himachal Pradesh",
    discription: "Wake up to beautiful views from this scenic cottage in Shimla, Himachal Pradesh. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 24600,
    location: "Shimla, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Budget Treehouse in Rishikesh, Uttarakhand",
    discription: "This budget treehouse in Rishikesh, Uttarakhand is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 25300,
    location: "Rishikesh, Uttarakhand",
    country: "India"
  },
  {
    title: "Premium Farmhouse in Munnar, Kerala",
    discription: "Escape the city rush at this premium farmhouse in Munnar, Kerala. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 26000,
    location: "Munnar, Kerala",
    country: "India"
  },
  {
    title: "Traditional Penthouse in Alleppey, Kerala",
    discription: "Stay in the heart of Alleppey, Kerala at this traditional penthouse. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 26700,
    location: "Alleppey, Kerala",
    country: "India"
  },
  {
    title: "Designer Studio in Udaipur, Rajasthan",
    discription: "A designer studio with plenty of natural light and calm surroundings in Udaipur, Rajasthan. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 27400,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Hilltop Loft in Jaipur, Rajasthan",
    discription: "Handpicked hilltop loft in Jaipur, Rajasthan — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 28100,
    location: "Jaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Beachfront Guesthouse in Jaisalmer, Rajasthan",
    discription: "Experience Jaisalmer, Rajasthan like a local from this beachfront guesthouse. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 28800,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Cozy Homestay in Coorg, Karnataka",
    discription: "A cozy homestay tucked away in Coorg, Karnataka, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 29500,
    location: "Coorg, Karnataka",
    country: "India"
  },
  {
    title: "Luxury Houseboat in Pondicherry",
    discription: "Wake up to beautiful views from this luxury houseboat in Pondicherry. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 30200,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Rustic Chalet in Darjeeling, West Bengal",
    discription: "This rustic chalet in Darjeeling, West Bengal is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 30900,
    location: "Darjeeling, West Bengal",
    country: "India"
  },
  {
    title: "Modern Mansion in Mumbai, Maharashtra",
    discription: "Escape the city rush at this modern mansion in Mumbai, Maharashtra. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 31600,
    location: "Mumbai, Maharashtra",
    country: "India"
  },
  {
    title: "Serene Tent in Lonavala, Maharashtra",
    discription: "Stay in the heart of Lonavala, Maharashtra at this serene tent. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 32300,
    location: "Lonavala, Maharashtra",
    country: "India"
  },
  {
    title: "Charming Villa in Nainital, Uttarakhand",
    discription: "A charming villa with plenty of natural light and calm surroundings in Nainital, Uttarakhand. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 33000,
    location: "Nainital, Uttarakhand",
    country: "India"
  },
  {
    title: "Spacious Apartment in Varanasi, Uttar Pradesh",
    discription: "Handpicked spacious apartment in Varanasi, Uttar Pradesh — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 33700,
    location: "Varanasi, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Sunny Cabin in Agra, Uttar Pradesh",
    discription: "Experience Agra, Uttar Pradesh like a local from this sunny cabin. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 34400,
    location: "Agra, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Peaceful Cottage in Srinagar, Kashmir",
    discription: "A peaceful cottage tucked away in Srinagar, Kashmir, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 35100,
    location: "Srinagar, Kashmir",
    country: "India"
  },
  {
    title: "Elegant Treehouse in Bali",
    discription: "Wake up to beautiful views from this elegant treehouse in Bali. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 35800,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Quaint Farmhouse in Bangkok",
    discription: "This quaint farmhouse in Bangkok is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 36500,
    location: "Bangkok",
    country: "Thailand"
  },
  {
    title: "Stylish Penthouse in Tokyo",
    discription: "Escape the city rush at this stylish penthouse in Tokyo. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 37200,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Private Studio in Paris",
    discription: "Stay in the heart of Paris at this private studio. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 37900,
    location: "Paris",
    country: "France"
  },
  {
    title: "Scenic Loft in Santorini",
    discription: "A scenic loft with plenty of natural light and calm surroundings in Santorini. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 38600,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Budget Guesthouse in Rome",
    discription: "Handpicked budget guesthouse in Rome — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 39300,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Premium Homestay in Barcelona",
    discription: "Experience Barcelona like a local from this premium homestay. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 40000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Traditional Houseboat in London",
    discription: "A traditional houseboat tucked away in London, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 40700,
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "Designer Chalet in New York",
    discription: "Wake up to beautiful views from this designer chalet in New York. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 41400,
    location: "New York",
    country: "United States"
  },
  {
    title: "Hilltop Mansion in Dubai",
    discription: "This hilltop mansion in Dubai is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 42100,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Beachfront Tent in Cape Town",
    discription: "Escape the city rush at this beachfront tent in Cape Town. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 42800,
    location: "Cape Town",
    country: "South Africa"
  },
  {
    title: "Cozy Villa in Anjuna, Goa",
    discription: "Stay in the heart of Anjuna, Goa at this cozy villa. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 43500,
    location: "Anjuna, Goa",
    country: "India"
  },
  {
    title: "Luxury Apartment in Palolem, Goa",
    discription: "A luxury apartment with plenty of natural light and calm surroundings in Palolem, Goa. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 44200,
    location: "Palolem, Goa",
    country: "India"
  },
  {
    title: "Rustic Cabin in Manali, Himachal Pradesh",
    discription: "Handpicked rustic cabin in Manali, Himachal Pradesh — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 44900,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Modern Cottage in Shimla, Himachal Pradesh",
    discription: "Experience Shimla, Himachal Pradesh like a local from this modern cottage. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 45600,
    location: "Shimla, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Serene Treehouse in Rishikesh, Uttarakhand",
    discription: "A serene treehouse tucked away in Rishikesh, Uttarakhand, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 46300,
    location: "Rishikesh, Uttarakhand",
    country: "India"
  },
  {
    title: "Charming Farmhouse in Munnar, Kerala",
    discription: "Wake up to beautiful views from this charming farmhouse in Munnar, Kerala. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 47000,
    location: "Munnar, Kerala",
    country: "India"
  },
  {
    title: "Spacious Penthouse in Alleppey, Kerala",
    discription: "This spacious penthouse in Alleppey, Kerala is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 47700,
    location: "Alleppey, Kerala",
    country: "India"
  },
  {
    title: "Sunny Studio in Udaipur, Rajasthan",
    discription: "Escape the city rush at this sunny studio in Udaipur, Rajasthan. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 48400,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Peaceful Loft in Jaipur, Rajasthan",
    discription: "Stay in the heart of Jaipur, Rajasthan at this peaceful loft. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 49100,
    location: "Jaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Elegant Guesthouse in Jaisalmer, Rajasthan",
    discription: "A elegant guesthouse with plenty of natural light and calm surroundings in Jaisalmer, Rajasthan. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 49800,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Quaint Homestay in Coorg, Karnataka",
    discription: "Handpicked quaint homestay in Coorg, Karnataka — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 50500,
    location: "Coorg, Karnataka",
    country: "India"
  },
  {
    title: "Stylish Houseboat in Pondicherry",
    discription: "Experience Pondicherry like a local from this stylish houseboat. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 51200,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Private Chalet in Darjeeling, West Bengal",
    discription: "A private chalet tucked away in Darjeeling, West Bengal, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 51900,
    location: "Darjeeling, West Bengal",
    country: "India"
  },
  {
    title: "Scenic Mansion in Mumbai, Maharashtra",
    discription: "Wake up to beautiful views from this scenic mansion in Mumbai, Maharashtra. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 52600,
    location: "Mumbai, Maharashtra",
    country: "India"
  },
  {
    title: "Budget Tent in Lonavala, Maharashtra",
    discription: "This budget tent in Lonavala, Maharashtra is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 53300,
    location: "Lonavala, Maharashtra",
    country: "India"
  },
  {
    title: "Premium Villa in Nainital, Uttarakhand",
    discription: "Escape the city rush at this premium villa in Nainital, Uttarakhand. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 54000,
    location: "Nainital, Uttarakhand",
    country: "India"
  },
  {
    title: "Traditional Apartment in Varanasi, Uttar Pradesh",
    discription: "Stay in the heart of Varanasi, Uttar Pradesh at this traditional apartment. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 54700,
    location: "Varanasi, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Designer Cabin in Agra, Uttar Pradesh",
    discription: "A designer cabin with plenty of natural light and calm surroundings in Agra, Uttar Pradesh. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 55400,
    location: "Agra, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Hilltop Cottage in Srinagar, Kashmir",
    discription: "Handpicked hilltop cottage in Srinagar, Kashmir — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 56100,
    location: "Srinagar, Kashmir",
    country: "India"
  },
  {
    title: "Beachfront Treehouse in Bali",
    discription: "Experience Bali like a local from this beachfront treehouse. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 56800,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Cozy Farmhouse in Bangkok",
    discription: "A cozy farmhouse tucked away in Bangkok, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 57500,
    location: "Bangkok",
    country: "Thailand"
  },
  {
    title: "Luxury Penthouse in Tokyo",
    discription: "Wake up to beautiful views from this luxury penthouse in Tokyo. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 58200,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Rustic Studio in Paris",
    discription: "This rustic studio in Paris is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 58900,
    location: "Paris",
    country: "France"
  },
  {
    title: "Modern Loft in Santorini",
    discription: "Escape the city rush at this modern loft in Santorini. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 59600,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Serene Guesthouse in Rome",
    discription: "Stay in the heart of Rome at this serene guesthouse. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 60300,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Charming Homestay in Barcelona",
    discription: "A charming homestay with plenty of natural light and calm surroundings in Barcelona. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 61000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Spacious Houseboat in London",
    discription: "Handpicked spacious houseboat in London — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 61700,
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "Sunny Chalet in New York",
    discription: "Experience New York like a local from this sunny chalet. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 62400,
    location: "New York",
    country: "United States"
  },
  {
    title: "Peaceful Mansion in Dubai",
    discription: "A peaceful mansion tucked away in Dubai, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 63100,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Elegant Tent in Cape Town",
    discription: "Wake up to beautiful views from this elegant tent in Cape Town. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 63800,
    location: "Cape Town",
    country: "South Africa"
  },
  {
    title: "Quaint Villa in Anjuna, Goa",
    discription: "This quaint villa in Anjuna, Goa is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 64500,
    location: "Anjuna, Goa",
    country: "India"
  },
  {
    title: "Stylish Apartment in Palolem, Goa",
    discription: "Escape the city rush at this stylish apartment in Palolem, Goa. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 65200,
    location: "Palolem, Goa",
    country: "India"
  },
  {
    title: "Private Cabin in Manali, Himachal Pradesh",
    discription: "Stay in the heart of Manali, Himachal Pradesh at this private cabin. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 65900,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Scenic Cottage in Shimla, Himachal Pradesh",
    discription: "A scenic cottage with plenty of natural light and calm surroundings in Shimla, Himachal Pradesh. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 66600,
    location: "Shimla, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Budget Treehouse in Rishikesh, Uttarakhand",
    discription: "Handpicked budget treehouse in Rishikesh, Uttarakhand — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 67300,
    location: "Rishikesh, Uttarakhand",
    country: "India"
  },
  {
    title: "Premium Farmhouse in Munnar, Kerala",
    discription: "Experience Munnar, Kerala like a local from this premium farmhouse. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 68000,
    location: "Munnar, Kerala",
    country: "India"
  },
  {
    title: "Traditional Penthouse in Alleppey, Kerala",
    discription: "A traditional penthouse tucked away in Alleppey, Kerala, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 68700,
    location: "Alleppey, Kerala",
    country: "India"
  },
  {
    title: "Designer Studio in Udaipur, Rajasthan",
    discription: "Wake up to beautiful views from this designer studio in Udaipur, Rajasthan. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 69400,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Hilltop Loft in Jaipur, Rajasthan",
    discription: "This hilltop loft in Jaipur, Rajasthan is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 70100,
    location: "Jaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Beachfront Guesthouse in Jaisalmer, Rajasthan",
    discription: "Escape the city rush at this beachfront guesthouse in Jaisalmer, Rajasthan. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 70800,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Cozy Homestay in Coorg, Karnataka",
    discription: "Stay in the heart of Coorg, Karnataka at this cozy homestay. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 71500,
    location: "Coorg, Karnataka",
    country: "India"
  },
  {
    title: "Luxury Houseboat in Pondicherry",
    discription: "A luxury houseboat with plenty of natural light and calm surroundings in Pondicherry. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 72200,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Rustic Chalet in Darjeeling, West Bengal",
    discription: "Handpicked rustic chalet in Darjeeling, West Bengal — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 72900,
    location: "Darjeeling, West Bengal",
    country: "India"
  },
  {
    title: "Modern Mansion in Mumbai, Maharashtra",
    discription: "Experience Mumbai, Maharashtra like a local from this modern mansion. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 73600,
    location: "Mumbai, Maharashtra",
    country: "India"
  },
  {
    title: "Serene Tent in Lonavala, Maharashtra",
    discription: "A serene tent tucked away in Lonavala, Maharashtra, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 74300,
    location: "Lonavala, Maharashtra",
    country: "India"
  },
  {
    title: "Charming Villa in Nainital, Uttarakhand",
    discription: "Wake up to beautiful views from this charming villa in Nainital, Uttarakhand. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 75000,
    location: "Nainital, Uttarakhand",
    country: "India"
  },
  {
    title: "Spacious Apartment in Varanasi, Uttar Pradesh",
    discription: "This spacious apartment in Varanasi, Uttar Pradesh is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 75700,
    location: "Varanasi, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Sunny Cabin in Agra, Uttar Pradesh",
    discription: "Escape the city rush at this sunny cabin in Agra, Uttar Pradesh. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 76400,
    location: "Agra, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Peaceful Cottage in Srinagar, Kashmir",
    discription: "Stay in the heart of Srinagar, Kashmir at this peaceful cottage. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 77100,
    location: "Srinagar, Kashmir",
    country: "India"
  },
  {
    title: "Elegant Treehouse in Bali",
    discription: "A elegant treehouse with plenty of natural light and calm surroundings in Bali. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 77800,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Quaint Farmhouse in Bangkok",
    discription: "Handpicked quaint farmhouse in Bangkok — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 78500,
    location: "Bangkok",
    country: "Thailand"
  },
  {
    title: "Stylish Penthouse in Tokyo",
    discription: "Experience Tokyo like a local from this stylish penthouse. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 79200,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Private Studio in Paris",
    discription: "A private studio tucked away in Paris, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 79900,
    location: "Paris",
    country: "France"
  },
  {
    title: "Scenic Loft in Santorini",
    discription: "Wake up to beautiful views from this scenic loft in Santorini. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 80600,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Budget Guesthouse in Rome",
    discription: "This budget guesthouse in Rome is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 81300,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Premium Homestay in Barcelona",
    discription: "Escape the city rush at this premium homestay in Barcelona. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 82000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Traditional Houseboat in London",
    discription: "Stay in the heart of London at this traditional houseboat. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 82700,
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "Designer Chalet in New York",
    discription: "A designer chalet with plenty of natural light and calm surroundings in New York. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 83400,
    location: "New York",
    country: "United States"
  },
  {
    title: "Hilltop Mansion in Dubai",
    discription: "Handpicked hilltop mansion in Dubai — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 84100,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Beachfront Tent in Cape Town",
    discription: "Experience Cape Town like a local from this beachfront tent. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 84800,
    location: "Cape Town",
    country: "South Africa"
  },
  {
    title: "Cozy Villa in Anjuna, Goa",
    discription: "A cozy villa tucked away in Anjuna, Goa, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 85500,
    location: "Anjuna, Goa",
    country: "India"
  },
  {
    title: "Luxury Apartment in Palolem, Goa",
    discription: "Wake up to beautiful views from this luxury apartment in Palolem, Goa. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 86200,
    location: "Palolem, Goa",
    country: "India"
  },
  {
    title: "Rustic Cabin in Manali, Himachal Pradesh",
    discription: "This rustic cabin in Manali, Himachal Pradesh is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 86900,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Modern Cottage in Shimla, Himachal Pradesh",
    discription: "Escape the city rush at this modern cottage in Shimla, Himachal Pradesh. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 87600,
    location: "Shimla, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Serene Treehouse in Rishikesh, Uttarakhand",
    discription: "Stay in the heart of Rishikesh, Uttarakhand at this serene treehouse. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 88300,
    location: "Rishikesh, Uttarakhand",
    country: "India"
  },
  {
    title: "Charming Farmhouse in Munnar, Kerala",
    discription: "A charming farmhouse with plenty of natural light and calm surroundings in Munnar, Kerala. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 89000,
    location: "Munnar, Kerala",
    country: "India"
  },
  {
    title: "Spacious Penthouse in Alleppey, Kerala",
    discription: "Handpicked spacious penthouse in Alleppey, Kerala — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 89700,
    location: "Alleppey, Kerala",
    country: "India"
  },
  {
    title: "Sunny Studio in Udaipur, Rajasthan",
    discription: "Experience Udaipur, Rajasthan like a local from this sunny studio. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 90400,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Peaceful Loft in Jaipur, Rajasthan",
    discription: "A peaceful loft tucked away in Jaipur, Rajasthan, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 91100,
    location: "Jaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Elegant Guesthouse in Jaisalmer, Rajasthan",
    discription: "Wake up to beautiful views from this elegant guesthouse in Jaisalmer, Rajasthan. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 91800,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Quaint Homestay in Coorg, Karnataka",
    discription: "This quaint homestay in Coorg, Karnataka is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 92500,
    location: "Coorg, Karnataka",
    country: "India"
  },
  {
    title: "Stylish Houseboat in Pondicherry",
    discription: "Escape the city rush at this stylish houseboat in Pondicherry. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 93200,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Private Chalet in Darjeeling, West Bengal",
    discription: "Stay in the heart of Darjeeling, West Bengal at this private chalet. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 93900,
    location: "Darjeeling, West Bengal",
    country: "India"
  },
  {
    title: "Scenic Mansion in Mumbai, Maharashtra",
    discription: "A scenic mansion with plenty of natural light and calm surroundings in Mumbai, Maharashtra. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 94600,
    location: "Mumbai, Maharashtra",
    country: "India"
  },
  {
    title: "Budget Tent in Lonavala, Maharashtra",
    discription: "Handpicked budget tent in Lonavala, Maharashtra — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 95300,
    location: "Lonavala, Maharashtra",
    country: "India"
  },
  {
    title: "Premium Villa in Nainital, Uttarakhand",
    discription: "Experience Nainital, Uttarakhand like a local from this premium villa. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 96000,
    location: "Nainital, Uttarakhand",
    country: "India"
  },
  {
    title: "Traditional Apartment in Varanasi, Uttar Pradesh",
    discription: "A traditional apartment tucked away in Varanasi, Uttar Pradesh, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 96700,
    location: "Varanasi, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Designer Cabin in Agra, Uttar Pradesh",
    discription: "Wake up to beautiful views from this designer cabin in Agra, Uttar Pradesh. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 97400,
    location: "Agra, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Hilltop Cottage in Srinagar, Kashmir",
    discription: "This hilltop cottage in Srinagar, Kashmir is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 98100,
    location: "Srinagar, Kashmir",
    country: "India"
  },
  {
    title: "Beachfront Treehouse in Bali",
    discription: "Escape the city rush at this beachfront treehouse in Bali. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 98800,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Cozy Farmhouse in Bangkok",
    discription: "Stay in the heart of Bangkok at this cozy farmhouse. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 99500,
    location: "Bangkok",
    country: "Thailand"
  },
  {
    title: "Luxury Penthouse in Tokyo",
    discription: "A luxury penthouse with plenty of natural light and calm surroundings in Tokyo. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 100200,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Rustic Studio in Paris",
    discription: "Handpicked rustic studio in Paris — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 100900,
    location: "Paris",
    country: "France"
  },
  {
    title: "Modern Loft in Santorini",
    discription: "Experience Santorini like a local from this modern loft. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 101600,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Serene Guesthouse in Rome",
    discription: "A serene guesthouse tucked away in Rome, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 102300,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Charming Homestay in Barcelona",
    discription: "Wake up to beautiful views from this charming homestay in Barcelona. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 103000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Spacious Houseboat in London",
    discription: "This spacious houseboat in London is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 103700,
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "Sunny Chalet in New York",
    discription: "Escape the city rush at this sunny chalet in New York. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 104400,
    location: "New York",
    country: "United States"
  },
  {
    title: "Peaceful Mansion in Dubai",
    discription: "Stay in the heart of Dubai at this peaceful mansion. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 105100,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Elegant Tent in Cape Town",
    discription: "A elegant tent with plenty of natural light and calm surroundings in Cape Town. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 105800,
    location: "Cape Town",
    country: "South Africa"
  },
  {
    title: "Quaint Villa in Anjuna, Goa",
    discription: "Handpicked quaint villa in Anjuna, Goa — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 106500,
    location: "Anjuna, Goa",
    country: "India"
  },
  {
    title: "Stylish Apartment in Palolem, Goa",
    discription: "Experience Palolem, Goa like a local from this stylish apartment. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 107200,
    location: "Palolem, Goa",
    country: "India"
  },
  {
    title: "Private Cabin in Manali, Himachal Pradesh",
    discription: "A private cabin tucked away in Manali, Himachal Pradesh, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 107900,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Scenic Cottage in Shimla, Himachal Pradesh",
    discription: "Wake up to beautiful views from this scenic cottage in Shimla, Himachal Pradesh. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 108600,
    location: "Shimla, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Budget Treehouse in Rishikesh, Uttarakhand",
    discription: "This budget treehouse in Rishikesh, Uttarakhand is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 109300,
    location: "Rishikesh, Uttarakhand",
    country: "India"
  },
  {
    title: "Premium Farmhouse in Munnar, Kerala",
    discription: "Escape the city rush at this premium farmhouse in Munnar, Kerala. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 110000,
    location: "Munnar, Kerala",
    country: "India"
  },
  {
    title: "Traditional Penthouse in Alleppey, Kerala",
    discription: "Stay in the heart of Alleppey, Kerala at this traditional penthouse. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 110700,
    location: "Alleppey, Kerala",
    country: "India"
  },
  {
    title: "Designer Studio in Udaipur, Rajasthan",
    discription: "A designer studio with plenty of natural light and calm surroundings in Udaipur, Rajasthan. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 111400,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Hilltop Loft in Jaipur, Rajasthan",
    discription: "Handpicked hilltop loft in Jaipur, Rajasthan — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 112100,
    location: "Jaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Beachfront Guesthouse in Jaisalmer, Rajasthan",
    discription: "Experience Jaisalmer, Rajasthan like a local from this beachfront guesthouse. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 112800,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Cozy Homestay in Coorg, Karnataka",
    discription: "A cozy homestay tucked away in Coorg, Karnataka, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 113500,
    location: "Coorg, Karnataka",
    country: "India"
  },
  {
    title: "Luxury Houseboat in Pondicherry",
    discription: "Wake up to beautiful views from this luxury houseboat in Pondicherry. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 114200,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Rustic Chalet in Darjeeling, West Bengal",
    discription: "This rustic chalet in Darjeeling, West Bengal is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 114900,
    location: "Darjeeling, West Bengal",
    country: "India"
  },
  {
    title: "Modern Mansion in Mumbai, Maharashtra",
    discription: "Escape the city rush at this modern mansion in Mumbai, Maharashtra. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 115600,
    location: "Mumbai, Maharashtra",
    country: "India"
  },
  {
    title: "Serene Tent in Lonavala, Maharashtra",
    discription: "Stay in the heart of Lonavala, Maharashtra at this serene tent. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 116300,
    location: "Lonavala, Maharashtra",
    country: "India"
  },
  {
    title: "Charming Villa in Nainital, Uttarakhand",
    discription: "A charming villa with plenty of natural light and calm surroundings in Nainital, Uttarakhand. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 117000,
    location: "Nainital, Uttarakhand",
    country: "India"
  },
  {
    title: "Spacious Apartment in Varanasi, Uttar Pradesh",
    discription: "Handpicked spacious apartment in Varanasi, Uttar Pradesh — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 117700,
    location: "Varanasi, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Sunny Cabin in Agra, Uttar Pradesh",
    discription: "Experience Agra, Uttar Pradesh like a local from this sunny cabin. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 118400,
    location: "Agra, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Peaceful Cottage in Srinagar, Kashmir",
    discription: "A peaceful cottage tucked away in Srinagar, Kashmir, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 119100,
    location: "Srinagar, Kashmir",
    country: "India"
  },
  {
    title: "Elegant Treehouse in Bali",
    discription: "Wake up to beautiful views from this elegant treehouse in Bali. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 119800,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Quaint Farmhouse in Bangkok",
    discription: "This quaint farmhouse in Bangkok is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 120500,
    location: "Bangkok",
    country: "Thailand"
  },
  {
    title: "Stylish Penthouse in Tokyo",
    discription: "Escape the city rush at this stylish penthouse in Tokyo. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 121200,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Private Studio in Paris",
    discription: "Stay in the heart of Paris at this private studio. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 121900,
    location: "Paris",
    country: "France"
  },
  {
    title: "Scenic Loft in Santorini",
    discription: "A scenic loft with plenty of natural light and calm surroundings in Santorini. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 122600,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Budget Guesthouse in Rome",
    discription: "Handpicked budget guesthouse in Rome — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 123300,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Premium Homestay in Barcelona",
    discription: "Experience Barcelona like a local from this premium homestay. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 124000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Traditional Houseboat in London",
    discription: "A traditional houseboat tucked away in London, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 124700,
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "Designer Chalet in New York",
    discription: "Wake up to beautiful views from this designer chalet in New York. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 125400,
    location: "New York",
    country: "United States"
  },
  {
    title: "Hilltop Mansion in Dubai",
    discription: "This hilltop mansion in Dubai is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 126100,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Beachfront Tent in Cape Town",
    discription: "Escape the city rush at this beachfront tent in Cape Town. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 126800,
    location: "Cape Town",
    country: "South Africa"
  },
  {
    title: "Cozy Villa in Anjuna, Goa",
    discription: "Stay in the heart of Anjuna, Goa at this cozy villa. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 127500,
    location: "Anjuna, Goa",
    country: "India"
  },
  {
    title: "Luxury Apartment in Palolem, Goa",
    discription: "A luxury apartment with plenty of natural light and calm surroundings in Palolem, Goa. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 128200,
    location: "Palolem, Goa",
    country: "India"
  },
  {
    title: "Rustic Cabin in Manali, Himachal Pradesh",
    discription: "Handpicked rustic cabin in Manali, Himachal Pradesh — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 128900,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Modern Cottage in Shimla, Himachal Pradesh",
    discription: "Experience Shimla, Himachal Pradesh like a local from this modern cottage. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 129600,
    location: "Shimla, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Serene Treehouse in Rishikesh, Uttarakhand",
    discription: "A serene treehouse tucked away in Rishikesh, Uttarakhand, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 130300,
    location: "Rishikesh, Uttarakhand",
    country: "India"
  },
  {
    title: "Charming Farmhouse in Munnar, Kerala",
    discription: "Wake up to beautiful views from this charming farmhouse in Munnar, Kerala. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 131000,
    location: "Munnar, Kerala",
    country: "India"
  },
  {
    title: "Spacious Penthouse in Alleppey, Kerala",
    discription: "This spacious penthouse in Alleppey, Kerala is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 131700,
    location: "Alleppey, Kerala",
    country: "India"
  },
  {
    title: "Sunny Studio in Udaipur, Rajasthan",
    discription: "Escape the city rush at this sunny studio in Udaipur, Rajasthan. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 132400,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Peaceful Loft in Jaipur, Rajasthan",
    discription: "Stay in the heart of Jaipur, Rajasthan at this peaceful loft. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 133100,
    location: "Jaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Elegant Guesthouse in Jaisalmer, Rajasthan",
    discription: "A elegant guesthouse with plenty of natural light and calm surroundings in Jaisalmer, Rajasthan. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 133800,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Quaint Homestay in Coorg, Karnataka",
    discription: "Handpicked quaint homestay in Coorg, Karnataka — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 134500,
    location: "Coorg, Karnataka",
    country: "India"
  },
  {
    title: "Stylish Houseboat in Pondicherry",
    discription: "Experience Pondicherry like a local from this stylish houseboat. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 135200,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Private Chalet in Darjeeling, West Bengal",
    discription: "A private chalet tucked away in Darjeeling, West Bengal, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 135900,
    location: "Darjeeling, West Bengal",
    country: "India"
  },
  {
    title: "Scenic Mansion in Mumbai, Maharashtra",
    discription: "Wake up to beautiful views from this scenic mansion in Mumbai, Maharashtra. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 136600,
    location: "Mumbai, Maharashtra",
    country: "India"
  },
  {
    title: "Budget Tent in Lonavala, Maharashtra",
    discription: "This budget tent in Lonavala, Maharashtra is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 137300,
    location: "Lonavala, Maharashtra",
    country: "India"
  },
  {
    title: "Premium Villa in Nainital, Uttarakhand",
    discription: "Escape the city rush at this premium villa in Nainital, Uttarakhand. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 138000,
    location: "Nainital, Uttarakhand",
    country: "India"
  },
  {
    title: "Traditional Apartment in Varanasi, Uttar Pradesh",
    discription: "Stay in the heart of Varanasi, Uttar Pradesh at this traditional apartment. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 138700,
    location: "Varanasi, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Designer Cabin in Agra, Uttar Pradesh",
    discription: "A designer cabin with plenty of natural light and calm surroundings in Agra, Uttar Pradesh. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 139400,
    location: "Agra, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Hilltop Cottage in Srinagar, Kashmir",
    discription: "Handpicked hilltop cottage in Srinagar, Kashmir — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 140100,
    location: "Srinagar, Kashmir",
    country: "India"
  },
  {
    title: "Beachfront Treehouse in Bali",
    discription: "Experience Bali like a local from this beachfront treehouse. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 140800,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Cozy Farmhouse in Bangkok",
    discription: "A cozy farmhouse tucked away in Bangkok, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 141500,
    location: "Bangkok",
    country: "Thailand"
  },
  {
    title: "Luxury Penthouse in Tokyo",
    discription: "Wake up to beautiful views from this luxury penthouse in Tokyo. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 142200,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Rustic Studio in Paris",
    discription: "This rustic studio in Paris is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 142900,
    location: "Paris",
    country: "France"
  },
  {
    title: "Modern Loft in Santorini",
    discription: "Escape the city rush at this modern loft in Santorini. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 143600,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Serene Guesthouse in Rome",
    discription: "Stay in the heart of Rome at this serene guesthouse. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 144300,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Charming Homestay in Barcelona",
    discription: "A charming homestay with plenty of natural light and calm surroundings in Barcelona. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 145000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Spacious Houseboat in London",
    discription: "Handpicked spacious houseboat in London — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 145700,
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "Sunny Chalet in New York",
    discription: "Experience New York like a local from this sunny chalet. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 146400,
    location: "New York",
    country: "United States"
  },
  {
    title: "Peaceful Mansion in Dubai",
    discription: "A peaceful mansion tucked away in Dubai, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 147100,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Elegant Tent in Cape Town",
    discription: "Wake up to beautiful views from this elegant tent in Cape Town. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 147800,
    location: "Cape Town",
    country: "South Africa"
  },
  {
    title: "Quaint Villa in Anjuna, Goa",
    discription: "This quaint villa in Anjuna, Goa is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 148500,
    location: "Anjuna, Goa",
    country: "India"
  },
  {
    title: "Stylish Apartment in Palolem, Goa",
    discription: "Escape the city rush at this stylish apartment in Palolem, Goa. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 149200,
    location: "Palolem, Goa",
    country: "India"
  },
  {
    title: "Private Cabin in Manali, Himachal Pradesh",
    discription: "Stay in the heart of Manali, Himachal Pradesh at this private cabin. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 149900,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Scenic Cottage in Shimla, Himachal Pradesh",
    discription: "A scenic cottage with plenty of natural light and calm surroundings in Shimla, Himachal Pradesh. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 150600,
    location: "Shimla, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Budget Treehouse in Rishikesh, Uttarakhand",
    discription: "Handpicked budget treehouse in Rishikesh, Uttarakhand — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 151300,
    location: "Rishikesh, Uttarakhand",
    country: "India"
  },
  {
    title: "Premium Farmhouse in Munnar, Kerala",
    discription: "Experience Munnar, Kerala like a local from this premium farmhouse. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 152000,
    location: "Munnar, Kerala",
    country: "India"
  },
  {
    title: "Traditional Penthouse in Alleppey, Kerala",
    discription: "A traditional penthouse tucked away in Alleppey, Kerala, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 152700,
    location: "Alleppey, Kerala",
    country: "India"
  },
  {
    title: "Designer Studio in Udaipur, Rajasthan",
    discription: "Wake up to beautiful views from this designer studio in Udaipur, Rajasthan. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 153400,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Hilltop Loft in Jaipur, Rajasthan",
    discription: "This hilltop loft in Jaipur, Rajasthan is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 154100,
    location: "Jaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Beachfront Guesthouse in Jaisalmer, Rajasthan",
    discription: "Escape the city rush at this beachfront guesthouse in Jaisalmer, Rajasthan. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 154800,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Cozy Homestay in Coorg, Karnataka",
    discription: "Stay in the heart of Coorg, Karnataka at this cozy homestay. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 155500,
    location: "Coorg, Karnataka",
    country: "India"
  },
  {
    title: "Luxury Houseboat in Pondicherry",
    discription: "A luxury houseboat with plenty of natural light and calm surroundings in Pondicherry. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 156200,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Rustic Chalet in Darjeeling, West Bengal",
    discription: "Handpicked rustic chalet in Darjeeling, West Bengal — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 156900,
    location: "Darjeeling, West Bengal",
    country: "India"
  },
  {
    title: "Modern Mansion in Mumbai, Maharashtra",
    discription: "Experience Mumbai, Maharashtra like a local from this modern mansion. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 157600,
    location: "Mumbai, Maharashtra",
    country: "India"
  },
  {
    title: "Serene Tent in Lonavala, Maharashtra",
    discription: "A serene tent tucked away in Lonavala, Maharashtra, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 158300,
    location: "Lonavala, Maharashtra",
    country: "India"
  },
  {
    title: "Charming Villa in Nainital, Uttarakhand",
    discription: "Wake up to beautiful views from this charming villa in Nainital, Uttarakhand. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 159000,
    location: "Nainital, Uttarakhand",
    country: "India"
  },
  {
    title: "Spacious Apartment in Varanasi, Uttar Pradesh",
    discription: "This spacious apartment in Varanasi, Uttar Pradesh is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 159700,
    location: "Varanasi, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Sunny Cabin in Agra, Uttar Pradesh",
    discription: "Escape the city rush at this sunny cabin in Agra, Uttar Pradesh. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 160400,
    location: "Agra, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Peaceful Cottage in Srinagar, Kashmir",
    discription: "Stay in the heart of Srinagar, Kashmir at this peaceful cottage. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 161100,
    location: "Srinagar, Kashmir",
    country: "India"
  },
  {
    title: "Elegant Treehouse in Bali",
    discription: "A elegant treehouse with plenty of natural light and calm surroundings in Bali. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 161800,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Quaint Farmhouse in Bangkok",
    discription: "Handpicked quaint farmhouse in Bangkok — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 162500,
    location: "Bangkok",
    country: "Thailand"
  },
  {
    title: "Stylish Penthouse in Tokyo",
    discription: "Experience Tokyo like a local from this stylish penthouse. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 163200,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Private Studio in Paris",
    discription: "A private studio tucked away in Paris, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 163900,
    location: "Paris",
    country: "France"
  },
  {
    title: "Scenic Loft in Santorini",
    discription: "Wake up to beautiful views from this scenic loft in Santorini. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 164600,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Budget Guesthouse in Rome",
    discription: "This budget guesthouse in Rome is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 165300,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Premium Homestay in Barcelona",
    discription: "Escape the city rush at this premium homestay in Barcelona. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 166000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Traditional Houseboat in London",
    discription: "Stay in the heart of London at this traditional houseboat. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 166700,
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "Designer Chalet in New York",
    discription: "A designer chalet with plenty of natural light and calm surroundings in New York. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 167400,
    location: "New York",
    country: "United States"
  },
  {
    title: "Hilltop Mansion in Dubai",
    discription: "Handpicked hilltop mansion in Dubai — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 168100,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Beachfront Tent in Cape Town",
    discription: "Experience Cape Town like a local from this beachfront tent. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 168800,
    location: "Cape Town",
    country: "South Africa"
  },
  {
    title: "Cozy Villa in Anjuna, Goa",
    discription: "A cozy villa tucked away in Anjuna, Goa, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 169500,
    location: "Anjuna, Goa",
    country: "India"
  },
  {
    title: "Luxury Apartment in Palolem, Goa",
    discription: "Wake up to beautiful views from this luxury apartment in Palolem, Goa. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 170200,
    location: "Palolem, Goa",
    country: "India"
  },
  {
    title: "Rustic Cabin in Manali, Himachal Pradesh",
    discription: "This rustic cabin in Manali, Himachal Pradesh is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 170900,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Modern Cottage in Shimla, Himachal Pradesh",
    discription: "Escape the city rush at this modern cottage in Shimla, Himachal Pradesh. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 171600,
    location: "Shimla, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Serene Treehouse in Rishikesh, Uttarakhand",
    discription: "Stay in the heart of Rishikesh, Uttarakhand at this serene treehouse. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 172300,
    location: "Rishikesh, Uttarakhand",
    country: "India"
  },
  {
    title: "Charming Farmhouse in Munnar, Kerala",
    discription: "A charming farmhouse with plenty of natural light and calm surroundings in Munnar, Kerala. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 173000,
    location: "Munnar, Kerala",
    country: "India"
  },
  {
    title: "Spacious Penthouse in Alleppey, Kerala",
    discription: "Handpicked spacious penthouse in Alleppey, Kerala — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 173700,
    location: "Alleppey, Kerala",
    country: "India"
  },
  {
    title: "Sunny Studio in Udaipur, Rajasthan",
    discription: "Experience Udaipur, Rajasthan like a local from this sunny studio. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 174400,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Peaceful Loft in Jaipur, Rajasthan",
    discription: "A peaceful loft tucked away in Jaipur, Rajasthan, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 175100,
    location: "Jaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Elegant Guesthouse in Jaisalmer, Rajasthan",
    discription: "Wake up to beautiful views from this elegant guesthouse in Jaisalmer, Rajasthan. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 175800,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Quaint Homestay in Coorg, Karnataka",
    discription: "This quaint homestay in Coorg, Karnataka is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 176500,
    location: "Coorg, Karnataka",
    country: "India"
  },
  {
    title: "Stylish Houseboat in Pondicherry",
    discription: "Escape the city rush at this stylish houseboat in Pondicherry. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 177200,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Private Chalet in Darjeeling, West Bengal",
    discription: "Stay in the heart of Darjeeling, West Bengal at this private chalet. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 177900,
    location: "Darjeeling, West Bengal",
    country: "India"
  },
  {
    title: "Scenic Mansion in Mumbai, Maharashtra",
    discription: "A scenic mansion with plenty of natural light and calm surroundings in Mumbai, Maharashtra. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 178600,
    location: "Mumbai, Maharashtra",
    country: "India"
  },
  {
    title: "Budget Tent in Lonavala, Maharashtra",
    discription: "Handpicked budget tent in Lonavala, Maharashtra — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 179300,
    location: "Lonavala, Maharashtra",
    country: "India"
  },
  {
    title: "Premium Villa in Nainital, Uttarakhand",
    discription: "Experience Nainital, Uttarakhand like a local from this premium villa. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 180000,
    location: "Nainital, Uttarakhand",
    country: "India"
  },
  {
    title: "Traditional Apartment in Varanasi, Uttar Pradesh",
    discription: "A traditional apartment tucked away in Varanasi, Uttar Pradesh, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 180700,
    location: "Varanasi, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Designer Cabin in Agra, Uttar Pradesh",
    discription: "Wake up to beautiful views from this designer cabin in Agra, Uttar Pradesh. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 181400,
    location: "Agra, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Hilltop Cottage in Srinagar, Kashmir",
    discription: "This hilltop cottage in Srinagar, Kashmir is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 182100,
    location: "Srinagar, Kashmir",
    country: "India"
  },
  {
    title: "Beachfront Treehouse in Bali",
    discription: "Escape the city rush at this beachfront treehouse in Bali. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 182800,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Cozy Farmhouse in Bangkok",
    discription: "Stay in the heart of Bangkok at this cozy farmhouse. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 183500,
    location: "Bangkok",
    country: "Thailand"
  },
  {
    title: "Luxury Penthouse in Tokyo",
    discription: "A luxury penthouse with plenty of natural light and calm surroundings in Tokyo. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 184200,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Rustic Studio in Paris",
    discription: "Handpicked rustic studio in Paris — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 184900,
    location: "Paris",
    country: "France"
  },
  {
    title: "Modern Loft in Santorini",
    discription: "Experience Santorini like a local from this modern loft. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 185600,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Serene Guesthouse in Rome",
    discription: "A serene guesthouse tucked away in Rome, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 186300,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Charming Homestay in Barcelona",
    discription: "Wake up to beautiful views from this charming homestay in Barcelona. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 187000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Spacious Houseboat in London",
    discription: "This spacious houseboat in London is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 187700,
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "Sunny Chalet in New York",
    discription: "Escape the city rush at this sunny chalet in New York. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 188400,
    location: "New York",
    country: "United States"
  },
  {
    title: "Peaceful Mansion in Dubai",
    discription: "Stay in the heart of Dubai at this peaceful mansion. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 189100,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Elegant Tent in Cape Town",
    discription: "A elegant tent with plenty of natural light and calm surroundings in Cape Town. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 189800,
    location: "Cape Town",
    country: "South Africa"
  },
  {
    title: "Quaint Villa in Anjuna, Goa",
    discription: "Handpicked quaint villa in Anjuna, Goa — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 190500,
    location: "Anjuna, Goa",
    country: "India"
  },
  {
    title: "Stylish Apartment in Palolem, Goa",
    discription: "Experience Palolem, Goa like a local from this stylish apartment. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 191200,
    location: "Palolem, Goa",
    country: "India"
  },
  {
    title: "Private Cabin in Manali, Himachal Pradesh",
    discription: "A private cabin tucked away in Manali, Himachal Pradesh, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 191900,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Scenic Cottage in Shimla, Himachal Pradesh",
    discription: "Wake up to beautiful views from this scenic cottage in Shimla, Himachal Pradesh. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 192600,
    location: "Shimla, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Budget Treehouse in Rishikesh, Uttarakhand",
    discription: "This budget treehouse in Rishikesh, Uttarakhand is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 193300,
    location: "Rishikesh, Uttarakhand",
    country: "India"
  },
  {
    title: "Premium Farmhouse in Munnar, Kerala",
    discription: "Escape the city rush at this premium farmhouse in Munnar, Kerala. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 194000,
    location: "Munnar, Kerala",
    country: "India"
  },
  {
    title: "Traditional Penthouse in Alleppey, Kerala",
    discription: "Stay in the heart of Alleppey, Kerala at this traditional penthouse. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 194700,
    location: "Alleppey, Kerala",
    country: "India"
  },
  {
    title: "Designer Studio in Udaipur, Rajasthan",
    discription: "A designer studio with plenty of natural light and calm surroundings in Udaipur, Rajasthan. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 195400,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Hilltop Loft in Jaipur, Rajasthan",
    discription: "Handpicked hilltop loft in Jaipur, Rajasthan — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 196100,
    location: "Jaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Beachfront Guesthouse in Jaisalmer, Rajasthan",
    discription: "Experience Jaisalmer, Rajasthan like a local from this beachfront guesthouse. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 196800,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Cozy Homestay in Coorg, Karnataka",
    discription: "A cozy homestay tucked away in Coorg, Karnataka, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 197500,
    location: "Coorg, Karnataka",
    country: "India"
  },
  {
    title: "Luxury Houseboat in Pondicherry",
    discription: "Wake up to beautiful views from this luxury houseboat in Pondicherry. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 198200,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Rustic Chalet in Darjeeling, West Bengal",
    discription: "This rustic chalet in Darjeeling, West Bengal is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 198900,
    location: "Darjeeling, West Bengal",
    country: "India"
  },
  {
    title: "Modern Mansion in Mumbai, Maharashtra",
    discription: "Escape the city rush at this modern mansion in Mumbai, Maharashtra. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 199600,
    location: "Mumbai, Maharashtra",
    country: "India"
  },
  {
    title: "Serene Tent in Lonavala, Maharashtra",
    discription: "Stay in the heart of Lonavala, Maharashtra at this serene tent. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 200300,
    location: "Lonavala, Maharashtra",
    country: "India"
  },
  {
    title: "Charming Villa in Nainital, Uttarakhand",
    discription: "A charming villa with plenty of natural light and calm surroundings in Nainital, Uttarakhand. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 201000,
    location: "Nainital, Uttarakhand",
    country: "India"
  },
  {
    title: "Spacious Apartment in Varanasi, Uttar Pradesh",
    discription: "Handpicked spacious apartment in Varanasi, Uttar Pradesh — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 201700,
    location: "Varanasi, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Sunny Cabin in Agra, Uttar Pradesh",
    discription: "Experience Agra, Uttar Pradesh like a local from this sunny cabin. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 202400,
    location: "Agra, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Peaceful Cottage in Srinagar, Kashmir",
    discription: "A peaceful cottage tucked away in Srinagar, Kashmir, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 203100,
    location: "Srinagar, Kashmir",
    country: "India"
  },
  {
    title: "Elegant Treehouse in Bali",
    discription: "Wake up to beautiful views from this elegant treehouse in Bali. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 203800,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Quaint Farmhouse in Bangkok",
    discription: "This quaint farmhouse in Bangkok is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 204500,
    location: "Bangkok",
    country: "Thailand"
  },
  {
    title: "Stylish Penthouse in Tokyo",
    discription: "Escape the city rush at this stylish penthouse in Tokyo. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 205200,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Private Studio in Paris",
    discription: "Stay in the heart of Paris at this private studio. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 205900,
    location: "Paris",
    country: "France"
  },
  {
    title: "Scenic Loft in Santorini",
    discription: "A scenic loft with plenty of natural light and calm surroundings in Santorini. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 206600,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Budget Guesthouse in Rome",
    discription: "Handpicked budget guesthouse in Rome — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 207300,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Premium Homestay in Barcelona",
    discription: "Experience Barcelona like a local from this premium homestay. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 208000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Traditional Houseboat in London",
    discription: "A traditional houseboat tucked away in London, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 208700,
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "Designer Chalet in New York",
    discription: "Wake up to beautiful views from this designer chalet in New York. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 209400,
    location: "New York",
    country: "United States"
  },
  {
    title: "Hilltop Mansion in Dubai",
    discription: "This hilltop mansion in Dubai is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 210100,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Beachfront Tent in Cape Town",
    discription: "Escape the city rush at this beachfront tent in Cape Town. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 210800,
    location: "Cape Town",
    country: "South Africa"
  },
  {
    title: "Cozy Villa in Anjuna, Goa",
    discription: "Stay in the heart of Anjuna, Goa at this cozy villa. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 211500,
    location: "Anjuna, Goa",
    country: "India"
  },
  {
    title: "Luxury Apartment in Palolem, Goa",
    discription: "A luxury apartment with plenty of natural light and calm surroundings in Palolem, Goa. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 212200,
    location: "Palolem, Goa",
    country: "India"
  },
  {
    title: "Rustic Cabin in Manali, Himachal Pradesh",
    discription: "Handpicked rustic cabin in Manali, Himachal Pradesh — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 212900,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Modern Cottage in Shimla, Himachal Pradesh",
    discription: "Experience Shimla, Himachal Pradesh like a local from this modern cottage. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 213600,
    location: "Shimla, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Serene Treehouse in Rishikesh, Uttarakhand",
    discription: "A serene treehouse tucked away in Rishikesh, Uttarakhand, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 214300,
    location: "Rishikesh, Uttarakhand",
    country: "India"
  },
  {
    title: "Charming Farmhouse in Munnar, Kerala",
    discription: "Wake up to beautiful views from this charming farmhouse in Munnar, Kerala. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 215000,
    location: "Munnar, Kerala",
    country: "India"
  },
  {
    title: "Spacious Penthouse in Alleppey, Kerala",
    discription: "This spacious penthouse in Alleppey, Kerala is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 215700,
    location: "Alleppey, Kerala",
    country: "India"
  },
  {
    title: "Sunny Studio in Udaipur, Rajasthan",
    discription: "Escape the city rush at this sunny studio in Udaipur, Rajasthan. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 216400,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Peaceful Loft in Jaipur, Rajasthan",
    discription: "Stay in the heart of Jaipur, Rajasthan at this peaceful loft. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 217100,
    location: "Jaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Elegant Guesthouse in Jaisalmer, Rajasthan",
    discription: "A elegant guesthouse with plenty of natural light and calm surroundings in Jaisalmer, Rajasthan. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 217800,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Quaint Homestay in Coorg, Karnataka",
    discription: "Handpicked quaint homestay in Coorg, Karnataka — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 218500,
    location: "Coorg, Karnataka",
    country: "India"
  },
  {
    title: "Stylish Houseboat in Pondicherry",
    discription: "Experience Pondicherry like a local from this stylish houseboat. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 219200,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Private Chalet in Darjeeling, West Bengal",
    discription: "A private chalet tucked away in Darjeeling, West Bengal, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 219900,
    location: "Darjeeling, West Bengal",
    country: "India"
  },
  {
    title: "Scenic Mansion in Mumbai, Maharashtra",
    discription: "Wake up to beautiful views from this scenic mansion in Mumbai, Maharashtra. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 220600,
    location: "Mumbai, Maharashtra",
    country: "India"
  },
  {
    title: "Budget Tent in Lonavala, Maharashtra",
    discription: "This budget tent in Lonavala, Maharashtra is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 221300,
    location: "Lonavala, Maharashtra",
    country: "India"
  },
  {
    title: "Premium Villa in Nainital, Uttarakhand",
    discription: "Escape the city rush at this premium villa in Nainital, Uttarakhand. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 222000,
    location: "Nainital, Uttarakhand",
    country: "India"
  },
  {
    title: "Traditional Apartment in Varanasi, Uttar Pradesh",
    discription: "Stay in the heart of Varanasi, Uttar Pradesh at this traditional apartment. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 222700,
    location: "Varanasi, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Designer Cabin in Agra, Uttar Pradesh",
    discription: "A designer cabin with plenty of natural light and calm surroundings in Agra, Uttar Pradesh. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 223400,
    location: "Agra, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Hilltop Cottage in Srinagar, Kashmir",
    discription: "Handpicked hilltop cottage in Srinagar, Kashmir — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 224100,
    location: "Srinagar, Kashmir",
    country: "India"
  },
  {
    title: "Beachfront Treehouse in Bali",
    discription: "Experience Bali like a local from this beachfront treehouse. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 224800,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Cozy Farmhouse in Bangkok",
    discription: "A cozy farmhouse tucked away in Bangkok, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 225500,
    location: "Bangkok",
    country: "Thailand"
  },
  {
    title: "Luxury Penthouse in Tokyo",
    discription: "Wake up to beautiful views from this luxury penthouse in Tokyo. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 226200,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Rustic Studio in Paris",
    discription: "This rustic studio in Paris is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 226900,
    location: "Paris",
    country: "France"
  },
  {
    title: "Modern Loft in Santorini",
    discription: "Escape the city rush at this modern loft in Santorini. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 227600,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Serene Guesthouse in Rome",
    discription: "Stay in the heart of Rome at this serene guesthouse. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 228300,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Charming Homestay in Barcelona",
    discription: "A charming homestay with plenty of natural light and calm surroundings in Barcelona. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 229000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Spacious Houseboat in London",
    discription: "Handpicked spacious houseboat in London — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 229700,
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "Sunny Chalet in New York",
    discription: "Experience New York like a local from this sunny chalet. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 230400,
    location: "New York",
    country: "United States"
  },
  {
    title: "Peaceful Mansion in Dubai",
    discription: "A peaceful mansion tucked away in Dubai, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 231100,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Elegant Tent in Cape Town",
    discription: "Wake up to beautiful views from this elegant tent in Cape Town. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 231800,
    location: "Cape Town",
    country: "South Africa"
  },
  {
    title: "Quaint Villa in Anjuna, Goa",
    discription: "This quaint villa in Anjuna, Goa is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 232500,
    location: "Anjuna, Goa",
    country: "India"
  },
  {
    title: "Stylish Apartment in Palolem, Goa",
    discription: "Escape the city rush at this stylish apartment in Palolem, Goa. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 233200,
    location: "Palolem, Goa",
    country: "India"
  },
  {
    title: "Private Cabin in Manali, Himachal Pradesh",
    discription: "Stay in the heart of Manali, Himachal Pradesh at this private cabin. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 233900,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Scenic Cottage in Shimla, Himachal Pradesh",
    discription: "A scenic cottage with plenty of natural light and calm surroundings in Shimla, Himachal Pradesh. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 234600,
    location: "Shimla, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Budget Treehouse in Rishikesh, Uttarakhand",
    discription: "Handpicked budget treehouse in Rishikesh, Uttarakhand — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 235300,
    location: "Rishikesh, Uttarakhand",
    country: "India"
  },
  {
    title: "Premium Farmhouse in Munnar, Kerala",
    discription: "Experience Munnar, Kerala like a local from this premium farmhouse. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 236000,
    location: "Munnar, Kerala",
    country: "India"
  },
  {
    title: "Traditional Penthouse in Alleppey, Kerala",
    discription: "A traditional penthouse tucked away in Alleppey, Kerala, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 236700,
    location: "Alleppey, Kerala",
    country: "India"
  },
  {
    title: "Designer Studio in Udaipur, Rajasthan",
    discription: "Wake up to beautiful views from this designer studio in Udaipur, Rajasthan. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 237400,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Hilltop Loft in Jaipur, Rajasthan",
    discription: "This hilltop loft in Jaipur, Rajasthan is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 238100,
    location: "Jaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Beachfront Guesthouse in Jaisalmer, Rajasthan",
    discription: "Escape the city rush at this beachfront guesthouse in Jaisalmer, Rajasthan. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 238800,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Cozy Homestay in Coorg, Karnataka",
    discription: "Stay in the heart of Coorg, Karnataka at this cozy homestay. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 239500,
    location: "Coorg, Karnataka",
    country: "India"
  },
  {
    title: "Luxury Houseboat in Pondicherry",
    discription: "A luxury houseboat with plenty of natural light and calm surroundings in Pondicherry. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 240200,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Rustic Chalet in Darjeeling, West Bengal",
    discription: "Handpicked rustic chalet in Darjeeling, West Bengal — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 240900,
    location: "Darjeeling, West Bengal",
    country: "India"
  },
  {
    title: "Modern Mansion in Mumbai, Maharashtra",
    discription: "Experience Mumbai, Maharashtra like a local from this modern mansion. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 241600,
    location: "Mumbai, Maharashtra",
    country: "India"
  },
  {
    title: "Serene Tent in Lonavala, Maharashtra",
    discription: "A serene tent tucked away in Lonavala, Maharashtra, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 242300,
    location: "Lonavala, Maharashtra",
    country: "India"
  },
  {
    title: "Charming Villa in Nainital, Uttarakhand",
    discription: "Wake up to beautiful views from this charming villa in Nainital, Uttarakhand. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    price: 243000,
    location: "Nainital, Uttarakhand",
    country: "India"
  },
  {
    title: "Spacious Apartment in Varanasi, Uttar Pradesh",
    discription: "This spacious apartment in Varanasi, Uttar Pradesh is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: 243700,
    location: "Varanasi, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Sunny Cabin in Agra, Uttar Pradesh",
    discription: "Escape the city rush at this sunny cabin in Agra, Uttar Pradesh. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    price: 244400,
    location: "Agra, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Peaceful Cottage in Srinagar, Kashmir",
    discription: "Stay in the heart of Srinagar, Kashmir at this peaceful cottage. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: 245100,
    location: "Srinagar, Kashmir",
    country: "India"
  },
  {
    title: "Elegant Treehouse in Bali",
    discription: "A elegant treehouse with plenty of natural light and calm surroundings in Bali. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: 245800,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Quaint Farmhouse in Bangkok",
    discription: "Handpicked quaint farmhouse in Bangkok — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    price: 246500,
    location: "Bangkok",
    country: "Thailand"
  },
  {
    title: "Stylish Penthouse in Tokyo",
    discription: "Experience Tokyo like a local from this stylish penthouse. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: 247200,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Private Studio in Paris",
    discription: "A private studio tucked away in Paris, perfect for travellers who want a quiet escape with easy access to local markets, cafés and viewpoints.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    price: 247900,
    location: "Paris",
    country: "France"
  },
  {
    title: "Scenic Loft in Santorini",
    discription: "Wake up to beautiful views from this scenic loft in Santorini. Fully furnished, self check-in, fast Wi-Fi and free parking included.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    price: 248600,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Budget Guesthouse in Rome",
    discription: "This budget guesthouse in Rome is ideal for couples and small families. Walkable to restaurants, transport and the main sightseeing spots.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    price: 249300,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Premium Homestay in Barcelona",
    discription: "Escape the city rush at this premium homestay in Barcelona. Private balcony, garden seating and a bonfire area for chilly evenings.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    price: 250000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Traditional Houseboat in London",
    discription: "Stay in the heart of London at this traditional houseboat. Bright interiors, a comfortable workspace and 24/7 host support.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: 250700,
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "Designer Chalet in New York",
    discription: "A designer chalet with plenty of natural light and calm surroundings in New York. Perfect base for exploring the region for a few days.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    price: 251400,
    location: "New York",
    country: "United States"
  },
  {
    title: "Hilltop Mansion in Dubai",
    discription: "Handpicked hilltop mansion in Dubai — clean linens, hot water, kitchenette and a friendly local host who shares the best food spots.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    price: 252100,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Beachfront Tent in Cape Town",
    discription: "Experience Cape Town like a local from this beachfront tent. Peaceful neighbourhood, stunning sunsets and everything you need for a comfortable stay.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    price: 252800,
    location: "Cape Town",
    country: "South Africa"
  }
];

module.exports = listingsData;