const sampleListings = [
    {
      title: "Apple",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image:"https://www.google.com/search?sca_esv=8ce8be85696c52dc&rlz=1C1RXQR_enIN1009IN1009&sxsrf=ACQVn09ygY6obYktBOrfhgFYyHAoFF9vdA:1710846183856&q=apple&tbm=isch&source=lnms&prmd=isnvmbtz&sa=X&ved=2ahUKEwjR_LbYloCFAxXYlFYBHWwPDKQQ0pQJegQIDRAB&biw=678&bih=597&dpr=1#imgrc=ktcxvF5LaXyVXM",
      
      price: 562,
      location: "Malibu",
      country: "United States",
      
      
    },
    {
      title: "Cherry",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image:  "https://www.google.com/search?q=cherry&&tbm=isch&ved=2ahUKEwitxcbZloCFAxXdzTgGHe7nB00Q2-cCegQIABAA&oq=cherry&gs_lp=EgNpbWciBmNoZXJyeTINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzIKEAAYgAQYigUYQzINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzIKEAAYgAQYigUYQzIKEAAYgAQYigUYQ0i_D1DQBVjCDHAAeACQAQCYAYkBoAGfB6oBAzAuN7gBA8gBAPgBAYoCC2d3cy13aXotaW1nwgIIEAAYgAQYsQPCAgQQIxgniAYB&sclient=img&ei=6nD5Za2oDN2b4-EP7s-f6AQ&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=OdXltLIjBrNp8M",
      
      price: 500,
      location: "New York City",
      country: "United States",
      
    },
    {
      title: "Grapes",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image:
        "https://www.google.com/search?q=Grapes&tbm=isch&ved=2ahUKEwjw4Jmll4CFAxW61TgGHQGrCrEQ2-cCegQIABAA&oq=Grapes&gs_lp=EgNpbWciBkdyYXBlczINEAAYgAQYigUYQxixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMg0QABiABBiKBRhDGLEDMgUQABiABDIFEAAYgAQyCBAAGIAEGLEDMg0QABiABBiKBRhDGLEDMggQABiABBixAzIFEAAYgARIgBtQhQhYyxlwAngAkAEAmAGDAaAB9waqAQMwLje4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ6gCCsICBBAjGCfCAgoQABiABBiKBRhDwgIHECMY6gIYJ4gGAQ&sclient=img&ei=iHH5ZfD8M7qr4-EPgdaqiAs&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=CpB9FlaaMRcRCM",
      
      price: 49,
      location: "Aspen",
      country: "United States",
      
    },
    {
      title: "Peach",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image:
         "https://www.google.com/search?q=peach&tbm=isch&ved=2ahUKEwidkMnOl4CFAxXG2TgGHSKyDLwQ2-cCegQIABAA&oq=peach&gs_lp=EgNpbWciBXBlYWNoMg0QABiABBiKBRhDGLEDMg0QABiABBiKBRhDGLEDMg0QABiABBiKBRhDGLEDMgoQABiABBiKBRhDMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDSKAWUI4LWOETcAB4AJABAJgBiQGgAZEGqgEDMC42uAEDyAEA-AEBigILZ3dzLXdpei1pbWfCAgQQIxgnwgIFEAAYgASIBgE&sclient=img&ei=33H5Zd2kJcaz4-EPouSy4As&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=yImLZhKV2rSKzM",
      
      price: 360,
      location: "Florence",
      country: "Italy",
      
    },
    {
      title: "Orange",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image:
       "https://www.google.com/search?q=orange&tbm=isch&ved=2ahUKEwjB78_9l4CFAxUZ7jgGHQZHD80Q2-cCegQIABAA&oq=orange&gs_lp=EgNpbWciBm9yYW5nZTINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzIKEAAYgAQYigUYQzINEAAYgAQYigUYQxixAzIKEAAYgAQYigUYQzINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzIKEAAYgAQYigUYQzIKEAAYgAQYigUYQzIKEAAYgAQYigUYQ0iAIlDnCViiIXACeACQAQOYAaABoAGTDaoBBDAuMTO4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ6gCCsICBBAjGCfCAggQABiABBixA8ICBRAAGIAEwgIJEAAYgAQYGBgKwgIHEAAYgAQYGMICBxAjGOoCGCeIBgE&sclient=img&ei=QnL5ZcHGEZnc4-EPho696Aw&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=nuP0k0qGROxlGM",
      
      price: 89,
      location: "Portland",
      country: "United States",
    },
    {
      title: "Mango",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: 
       "https://www.google.com/search?q=mango&tbm=isch&ved=2ahUKEwi-j4CsmICFAxUu4zgGHU_UA5YQ2-cCegQIABAA&oq=mango&gs_lp=EgNpbWciBW1hbmdvMg0QABiABBiKBRhDGLEDMg0QABiABBiKBRhDGLEDMg0QABiABBiKBRhDGLEDMg0QABiABBiKBRhDGLEDMg0QABiABBiKBRhDGLEDMg0QABiABBiKBRhDGLEDMg0QABiABBiKBRhDGLEDMhAQABiABBiKBRhDGLEDGIMBMgUQABiABDINEAAYgAQYigUYQxixA0ivElDdCFjqDXAAeACQAQCYAYcBoAH5BaoBAzAuNrgBA8gBAPgBAYoCC2d3cy13aXotaW1nwgIEECMYJ8ICCBAAGIAEGLEDwgIKEAAYgAQYigUYQ4gGAQ&sclient=img&ei=o3L5Zf6xIa7G4-EPz6iPsAk&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=P0ZZnyMPRSAB9M",
     
      price: 110,
      location: "Cancun",
      country: "Mexico",
    },
    {
      title: "Guava",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: 
         "https://www.google.com/search?q=guava&tbm=isch&ved=2ahUKEwj03ZbYmICFAxWmyzgGHRQyByoQ2-cCegQIABAA&oq=guava&gs_lp=EgNpbWciBWd1YXZhMg0QABiABBiKBRhDGLEDMg0QABiABBiKBRhDGLEDMg0QABiABBiKBRhDGLEDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMg0QABiABBiKBRhDGLEDMgoQABiABBiKBRhDMg0QABiABBiKBRhDGLEDMgUQABiABDIFEAAYgARIqhVQ6gVY_AtwAHgAkAEAmAGHAaABhQaqAQMwLja4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ8ICBBAjGCfCAggQABiABBixA8ICEBAAGIAEGIoFGEMYsQMYgwGIBgE&sclient=img&ei=AHP5ZfTdC6aX4-EPlOSc0AI&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=M2ovch19mzObVM",
    
      price: 139,
      location: "Lake Tahoe",
      country: "United States",
    },
    {
      title: "Lime",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: 
         "https://www.google.com/search?q=lime&tbm=isch&ved=2ahUKEwj4ybn-mICFAxXjyDgGHZJQBeIQ2-cCegQIABAA&oq=lime&gs_lp=EgNpbWciBGxpbWUyDRAAGIAEGIoFGEMYsQMyChAAGIAEGIoFGEMyDRAAGIAEGIoFGEMYsQMyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyBRAAGIAEMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDSNAaUKYKWOQYcAF4AJABAJgBjAGgAY4GqgEDMC42uAEDyAEA-AEBigILZ3dzLXdpei1pbWfCAgQQIxgniAYB&sclient=img&ei=UHP5ZfjhG-OR4-EPkqGVkA4&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=syIOCwn0messNM",
   
      price: 60,
      location: "Los Angeles",
      country: "United States",
    },
    {
      title: "Apricot",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: 
       "https://www.google.com/search?q=apricot&tbm=isch&ved=2ahUKEwjiiamfmYCFAxX87jgGHdOkDp4Q2-cCegQIABAA&oq=apricot&gs_lp=EgNpbWciB2Fwcmljb3QyDRAAGIAEGIoFGEMYsQMyBRAAGIAEMgUQABiABDIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIwyVQkQZYnCRwA3gAkAEAmAGQAaABlwuqAQQwLjExuAEDyAEA-AEBigILZ3dzLXdpei1pbWfCAgQQIxgnwgIKEAAYgAQYigUYQ8ICBBAAGAPCAgQQABgewgIGEAAYCBgeiAYB&sclient=img&ei=lXP5ZaLrF_zd4-EP08m68Ak&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=-VUg0Enp8hRjeM",
     
      price: 450,
      location: "Verbier",
      country: "Switzerland",
    },
    {
      title: "Grapefruit",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: 
       
       "https://www.google.com/search?q=grapefuit&tbm=isch&ved=2ahUKEwigs5PFmYCFAxWkxzgGHS-pCRMQ2-cCegQIABAA&oq=grapefu&gs_lp=EgNpbWciB2dyYXBlZnUqAggAMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjhGVDOBViyD3AAeACQAQCYAbYBoAGnCKoBAzAuOLgBAcgBAPgBAYoCC2d3cy13aXotaW1nwgIEECMYJ8ICDRAAGIAEGIoFGEMYsQPCAggQABiABBixA8ICChAAGIAEGIoFGEOIBgE&sclient=img&ei=5HP5ZaCxLKSP4-EPr9KmmAE&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=eTB8cL9lsrQJkM",
      
      price: 70,
      location: "Serengeti National Park",
      country: "Tanzania",
    },
    {
      title: "Sapodilla",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image: 
         "https://www.google.com/search?q=sapodilla&tbm=isch&ved=2ahUKEwjX243qmYCFAxXlzDgGHTbhB24Q2-cCegQIABAA&oq=sapodilla&gs_lp=EgNpbWciCXNhcG9kaWxsYTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI6xdQ6gRYhRZwAHgAkAEAmAGMAaABgAqqAQQwLjEwuAEDyAEA-AEBigILZ3dzLXdpei1pbWfCAgQQIxgnwgIJEAAYgAQYGBgKwgIIEAAYgAQYsQOIBgE&sclient=img&ei=MnT5Zdf6DeWZ4-EPtsKf8AY&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=ByeQthFVnhUZ0M",
     
      price: 78,
      location: "Amsterdam",
      country: "Netherlands",
    },
    {
      title: "Kiwi",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image: 
        "https://www.google.com/search?q=kiwi&tbm=isch&ved=2ahUKEwidstKZmoCFAxXerWMGHX9NBiEQ2-cCegQIABAA&oq=kiwi&gs_lp=EgNpbWciBGtpd2kyDRAAGIAEGIoFGEMYsQMyCBAAGIAEGLEDMggQABiABBixAzIFEAAYgAQyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDINEAAYgAQYigUYQxixA0iEEFDiCVjtDHAAeACQAQCYAcYBoAHrBaoBAzAuNbgBA8gBAPgBAYoCC2d3cy13aXotaW1nwgIEECMYJ8ICChAAGIAEGIoFGEOIBgE&sclient=img&ei=lXT5Zd2TON7bjuMP_5qZiAI&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=X0KhV6XbXG4GoM",
      
      price: 78,
      location: "Fiji",
      country: "Fiji",
    },
    {
      title: "Plum",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image: 
        "https://www.google.com/search?q=plum&tbm=isch&ved=2ahUKEwi9_anAmoCFAxWh4TgGHXr_A0IQ2-cCegQIABAA&oq=plum&gs_lp=EgNpbWciBHBsdW0yDRAAGIAEGIoFGEMYsQMyDRAAGIAEGIoFGEMYsQMyChAAGIAEGIoFGEMyCBAAGIAEGLEDMgUQABiABDIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyBRAAGIAESMsTUOALWN4RcAB4AJABAJgBhQGgAYgFqgEDMC41uAEDyAEA-AEBigILZ3dzLXdpei1pbWfCAgQQIxgniAYB&sclient=img&ei=53T5Zf3tAqHD4-EP-v6PkAQ&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=p0u9K-cFkFtsPM",
      
      price: 350,
      location: "Cotswolds",
      country: "United Kingdom",
    },
    {
      title: "Loquat",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image: 
       "https://www.google.com/search?q=loquat&tbm=isch&ved=2ahUKEwjR_vPdmoCFAxVRp2MGHeKBCx8Q2-cCegQIABAA&oq=loquat&gs_lp=EgNpbWciBmxvcXVhdDINEAAYgAQYigUYQxixAzIFEAAYgAQyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI2BNQrglYmxJwAHgAkAEAmAGXAqABpQiqAQUwLjYuMbgBA8gBAPgBAYoCC2d3cy13aXotaW1nwgIEECMYJ8ICCBAAGIAEGLEDiAYB&sclient=img&ei=JXX5ZZHYBNHOjuMP4oOu-AE&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=gChUT86pO68gYM",
      
      price: 250,
      location: "Boston",
      country: "United States",
    },
    {
      title: "Pear",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      image: 
         "https://www.google.com/search?q=pear&tbm=isch&ved=2ahUKEwj90qH9moCFAxUEoWMGHY8iA7YQ2-cCegQIABAA&oq=pear&gs_lp=EgNpbWciBHBlYXIyDRAAGIAEGIoFGEMYsQMyBRAAGIAEMgoQABiABBiKBRhDMgUQABiABDIFEAAYgAQyCBAAGIAEGLEDMggQABiABBixAzIFEAAYgAQyBRAAGIAEMggQABiABBixA0iID1DfCVjJDXAAeACQAQCYAY0BoAGfBaoBAzAuNbgBA8gBAPgBAYoCC2d3cy13aXotaW1nwgIEECMYJ4gGAQ&sclient=img&ei=ZnX5Zf2HM4TCjuMPj8WMsAs&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=R8-RQ-Xj3gTsaM",
      
      price: 60,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Lichi",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      image: 
        "https://www.google.com/search?q=lichi&tbm=isch&ved=2ahUKEwjjpLi2m4CFAxV-g2MGHXPPAKkQ2-cCegQIABAA&oq=lichi&gs_lp=EgNpbWciBWxpY2hpMggQABiABBixAzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjREVCGCVj6DHAAeACQAQCYAY0BoAGgBqoBAzAuNrgBA8gBAPgBAYoCC2d3cy13aXotaW1nwgIEECMYJ8ICChAAGIAEGIoFGEPCAg0QABiABBiKBRhDGLEDiAYB&sclient=img&ei=3nX5ZeO9Lf6GjuMP856DyAo&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=CGd0nHjLrnyrTM",
      
      price: 50,
      location: "Banff",
      country: "Canada",
    },
    {
      title: "Strawberry",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      image: 
       "https://www.google.com/search?q=strawberry&tbm=isch&ved=2ahUKEwi68-7Vm4CFAxWPyTgGHUWqC9YQ2-cCegQIABAA&oq=str&gs_lp=EgNpbWciA3N0cioCCAEyBBAjGCcyDRAAGIAEGIoFGEMYsQMyBRAAGIAEMggQABiABBixAzIFEAAYgAQyDRAAGIAEGIoFGEMYsQMyBRAAGIAEMgUQABiABDIKEAAYgAQYigUYQzIIEAAYgAQYsQNI4B9Q2whYig9wAXgAkAEAmAGFAaABgASqAQMwLjS4AQHIAQD4AQGKAgtnd3Mtd2l6LWltZ6gCCsICBxAjGOoCGCeIBgE&sclient=img&ei=IHb5ZbrjJ4-T4-EPxdSusA0&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=G5aw96V89kj5VM",
    
      price: 50,
      location: "Miami",
      country: "United States",
    },
    {
      title: "Banana",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
      image:
        "https://www.google.com/search?q=banana&tbm=isch&ved=2ahUKEwjbx-v0m4CFAxWryjgGHSr0DIUQ2-cCegQIABAA&oq=banana&gs_lp=EgNpbWciBmJhbmFuYTINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzIKEAAYgAQYigUYQzINEAAYgAQYigUYQxixAzIQEAAYgAQYigUYQxixAxiDATIKEAAYgAQYigUYQ0iFGFC6CFi3FXAAeACQAQCYAZ4BoAGVB6oBAzAuN7gBA8gBAPgBAYoCC2d3cy13aXotaW1nwgIEECMYJ8ICCBAAGIAEGLEDwgIFEAAYgASIBgE&sclient=img&ei=YXb5ZZuTJauV4-EPquizqAg&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=XAg7eOfC1FpV6M",
     
      price: 40,
      location: "Phuket",
      country: "Thailand",
    },
    {
      title: "Pomogranate",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
      image: 
        "https://www.google.com/search?q=pomogranate&tbm=isch&ved=2ahUKEwjX_oSknICFAxV0nGMGHSmyCw0Q2-cCegQIABAA&oq=pomogra&gs_lp=EgNpbWciB3BvbW9ncmEqAggAMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiWHlC6CVjWFHAAeACQAQCYAZABoAGcCKoBAzAuOLgBAcgBAPgBAYoCC2d3cy13aXotaW1nwgIEECMYJ8ICCBAAGIAEGLEDwgINEAAYgAQYigUYQxixA8ICChAAGIAEGIoFGEOIBgE&sclient=img&ei=xHb5ZdeMJPS4juMPqeSuaA&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=tb3HOlbh1UnwLM",
      
      price: 95,
      location: "Scottish Highlands",
      country: "United Kingdom",
    },
    {
      title: "Blackberry",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      image: 
        "https://www.google.com/search?q=blackberry&tbm=isch&ved=2ahUKEwiXruG-nICFAxUN7zgGHU0GDuYQ2-cCegQIABAA&oq=blackberry&gs_lp=EgNpbWciCmJsYWNrYmVycnkyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMggQABiABBixAzIFEAAYgAQyBRAAGIAESN4cUM4IWMAacAB4AJABAJgBnAGgAYwLqgEEMC4xMbgBA8gBAPgBAYoCC2d3cy13aXotaW1nwgIEECMYJ4gGAQ&sclient=img&ei=_Hb5ZZfAJo3e4-EPzYy4sA4&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=TcBduE_HVRwLoM",
      
      price: 50,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "Pinapple",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      image: 
       "https://www.google.com/search?q=pineapple&tbm=isch&ved=2ahUKEwjDyPDfnICFAxXSjWMGHRY1BvAQ2-cCegQIABAA&oq=pineapple&gs_lp=EgNpbWciCXBpbmVhcHBsZTINEAAYgAQYigUYQxixAzIIEAAYgAQYsQMyBRAAGIAEMgoQABiABBiKBRhDMggQABiABBixAzINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzIFEAAYgAQyCBAAGIAEGLEDMgUQABiABEjuGFCtCVjEF3AAeACQAQCYAYwBoAH2CaoBBDAuMTC4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ8ICBBAjGCeIBgE&sclient=img&ei=Qnf5ZcOfBdKbjuMPluqYgA8&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=v76PCSQ9R9BSWM",
      
      price: 75,
      location: "Montana",
      country: "United States",
    },
    {
      title: "Dragon Fruit",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
      image: 
         "https://www.google.com/search?q=dragon+fruit&tbm=isch&ved=2ahUKEwiNqbeDnYCFAxWK-TgGHeOKDqAQ2-cCegQIABAA&oq=dragon+fruit&gs_lp=EgNpbWciDGRyYWdvbiBmcnVpdDINEAAYgAQYigUYQxixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMgoQABiABBiKBRhDMggQABiABBixAzIKEAAYgAQYigUYQzIFEAAYgAQyChAAGIAEGIoFGEMyBRAAGIAEMgUQABiABEiPLFD1BFiiK3AFeACQAQCYAZABoAGtEaoBBDAuMTe4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ6gCCsICBBAjGCfCAgQQABgewgIHECMY6gIYJ4gGAQ&sclient=img&ei=jHf5ZY2zJ4rz4-EP45W6gAo&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=K7G1a-n_1iCgBM",
      
      price: 60,
      location: "Mykonos",
      country: "Greece",
    },
    {
      title: "Papaya",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      image: 
        
        "https://www.google.com/search?q=papaya&tbm=isch&ved=2ahUKEwino_etnYCFAxWo8TgGHQkaCpoQ2-cCegQIABAA&oq=papaya&gs_lp=EgNpbWciBnBhcGF5YTINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzIIEAAYgAQYsQMyChAAGIAEGIoFGEMyDRAAGIAEGIoFGEMYsQMyCBAAGIAEGLEDMggQABiABBixAzIFEAAYgAQyBRAAGIAESPcXUP0JWOEUcAB4AJABAJgBhAGgAfMGqgEDMC43uAEDyAEA-AEBigILZ3dzLXdpei1pbWfCAgQQIxgnwgIQEAAYgAQYigUYQxixAxiDAYgGAQ&sclient=img&ei=5Xf5ZeecL6jj4-EPibSo0Ak&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=qh4YdO1b3KqCmM",
      
      price: 72,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Fig",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
      image: 
         "https://www.google.com/search?q=fig&tbm=isch&ved=2ahUKEwiH9J_QnYCFAxV43jgGHdSzC9QQ2-cCegQIABAA&oq=fig&gs_lp=EgNpbWciA2ZpZzIEECMYJzINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzIKEAAYgAQYigUYQzINEAAYgAQYigUYQxixAzINEAAYgAQYigUYQxixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMgUQABiABDIIEAAYgAQYsQNI-AtQ1AhYigtwAHgAkAEAmAGQAaABlAOqAQMwLjO4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ4gGAQ&sclient=img&ei=LXj5ZcepLfi84-EP1OeuoA0&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=Fl1Iv8DubBvzFM",
      
      price: 45,
      location: "Charleston",
      country: "United States",
    },
    {
      title: "Custard apple",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
      image: 
        "https://www.google.com/search?q=custard+apple&tbm=isch&ved=2ahUKEwjFsvnznYCFAxXSjWMGHRY1BvAQ2-cCegQIABAA&oq=custard+apple&gs_lp=EgNpbWciDWN1c3RhcmQgYXBwbGUyDRAAGIAEGIoFGEMYsQMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIuiFQxgdYtCBwAHgAkAEAmAGUAaABtw2qAQQwLjEzuAEDyAEA-AEBigILZ3dzLXdpei1pbWfCAgQQIxgnwgIIEAAYgAQYsQPCAgoQABiABBiKBRhDiAYB&sclient=img&ei=eHj5ZcWWJdKbjuMPluqYgA8&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=vSrYzh2MTHY1HM",
      
      price: 110,
      location: "Tokyo",
      country: "Japan",
    },
    {
      title: "Melon",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
      image: 
         "https://www.google.com/search?q=melon&tbm=isch&ved=2ahUKEwiut-aRnoCFAxWQzjgGHe9PC-sQ2-cCegQIABAA&oq=melon&gs_lp=EgNpbWciBW1lbG9uMg0QABiABBiKBRhDGLEDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIhRJQ4glY7g9wAHgAkAEAmAGOAaABswaqAQMwLja4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ8ICBBAjGCfCAggQABiABBixA4gGAQ&sclient=img&ei=t3j5Ze7_DJCd4-EP75-t2A4&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=JwYC9uXDx5QGpM",
      
      price: 95,
      location: "New Hampshire",
      country: "United States",
    },
    {
      title: "Rambutan",
      description:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      image: 
         "https://www.google.com/search?q=rambutan&tbm=isch&ved=2ahUKEwjv38-7noCFAxUi1zgGHfULA4IQ2-cCegQIABAA&oq=rambutan&gs_lp=EgNpbWciCHJhbWJ1dGFuMg0QABiABBiKBRhDGLEDMgoQABiABBiKBRhDMggQABiABBixAzIKEAAYgAQYigUYQzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjhM1C9BVimMnAFeACQAQSYAasBoAHOEqoBBDAuMTi4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ6gCCsICBBAjGCfCAgkQABiABBgYGArCAgcQABiABBgYwgIHECMY6gIYJ4gGAQ&sclient=img&ei=Dnn5Ze-gOKKu4-EP9ZeMkAg&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=bOvPWJG4WNlr0M",
      
      price: 95,
      location: "Maldives",
      country: "Maldives",
    },
    {
      title: "Watermelon",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
      image: 
         "https://www.google.com/search?q=watermelon&tbm=isch&ved=2ahUKEwiV2IrgnoCFAxWz9jgGHcUjD2MQ2-cCegQIABAA&oq=watermelon&gs_lp=EgNpbWciCndhdGVybWVsb24yDRAAGIAEGIoFGEMYsQMyDRAAGIAEGIoFGEMYsQMyDRAAGIAEGIoFGEMYsQMyCBAAGIAEGLEDMgoQABiABBiKBRhDMg0QABiABBiKBRhDGLEDMggQABiABBixAzIIEAAYgAQYsQMyBRAAGIAEMggQABiABBixA0jOHFDyBFiwGHAAeACQAQCYAYUBoAGSC6oBBDAuMTG4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ8ICBBAjGCeIBgE&sclient=img&ei=W3n5ZdW-F7Pt4-EPxce8mAY&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=yEYyAtNwjCqkHM",
      
      price: 60,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Cocnut",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
      image: 
        "https://www.google.com/search?q=coconut&tbm=isch&ved=2ahUKEwinxLiGn4CFAxWmyzgGHRQyByoQ2-cCegQIABAA&oq=coconut&gs_lp=EgNpbWciB2NvY29udXQyDRAAGIAEGIoFGEMYsQMyDRAAGIAEGIoFGEMYsQMyDRAAGIAEGIoFGEMYsQMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyDRAAGIAEGIoFGEMYsQMyCBAAGIAEGLEDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMg0QABiABBiKBRhDGLEDSI4UUJMGWPUScAB4AJABAJgBjgGgAaQIqgEDMC44uAEDyAEA-AEBigILZ3dzLXdpei1pbWfCAgQQIxgnwgIFEAAYgATCAhAQABiABBiKBRhDGLEDGIMBiAYB&sclient=img&ei=q3n5ZefCMqaX4-EPlOSc0AI&bih=597&biw=678&prmd=isnvmbtz&rlz=1C1RXQR_enIN1009IN1009#imgrc=14fEjv8y5q0LlM",
      
      price: 25,
      location: "Costa Rica",
      country: "Costa Rica",
    },
  ];
  
  module.exports = { data: sampleListings };