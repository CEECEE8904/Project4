# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sneakr1= Sneaker.create(name: "Nike Air Mag", brand: "Nike", description: "back to the future", review: "futuristic sneakers", imgurl: "https://i2.wp.com/www.nicekicks.com/files/2016/10/ni.jpg?fit=750%2C400&ssl=1",price: "35,000" )
sneakr2= Sneaker.create(name: "Air Jordan 1 Bred Toe", brand: "Nike", description: "Jordan's First Signature Sneaker", review: "classic silhouette", imgurl: "https://cdn.shopify.com/s/files/1/0230/0485/products/robformat_copy_copy_a954f2dd-6ae1-4283-9645-3cedb6e93d20_large.jpg?v=1519262175", price: "500",)



collect1= Collect.create(name: "Airmax 95", brand: "Nike", description: "it was made in 95", review: "old classic",  imgurl: "https://sneakernews.com/wp-content/uploads/2019/01/nike-air-max-95-mint-cd7495-101-3.jpg", price: "350")
collect2= Collect.create(name: "Pump Omnilite", brand: "Reebok", description: "Dee Browns signature shoe", review: "classic reebok silhouette", imgurl: "https://sneakerfreaker-cdn.s3-accelerate.amazonaws.com/image/Reebok-Pump-Omni-Lite-OG-Angle.jpg?mtime=20170802124157", price: "200")