// What do I need?
// I need a function that takes the user inputs and estimates materials 
// I need a function that takes estimate materials and outputs a cost estimate
// Disclaimer about price variation
// I need to take the user INPUTS from the fence details and turn them into amount of materials
// Click send estimate to email, type in email, and send estimate

// Round up on decimals
let materialEstimate = function () {
    // Posts = (length in feet / 8') + 1
    let postMaterials = (( ($( "fence-length" ).val) / 8) + 1);
    // Railings = ((posts - 1) x 2)
    let railingMaterials = ((postMaterials - 1) * ($( "railings-per-section" ).val));
    // Pickets = ((Fence length - (Posts * 6 inches)) / 5.5 inches)
    let picketMaterials = ( ($( "fenceLength" ).val) $( "picket-width" ).val;
    let picketSpacing = {'$picket-spacing'}.val;
    // 1000 nails per 30ft of fnecing, minimum 1 box
    // Nails (1 1/4) = 2lbs per 30ft
    // Nails (3 1/4) = 1lb per 30ft
}

// Server-side API: SerpAPI
// Take prices from SerpAPI, multiply price by amount of materials, and display price estimate
// SerpAPI private API key: c60213f49b7f6c7d3104e4e3ebedb0a867f554b32488845fa0c2ed875f163e86
{
    "search_metadata":
    {
        "id": "629a93d0fdca3e417aec3334",
        "status": "Success",
        "json_endpoint": "https://serpapi.com/searches/4440b957994c04fe/629a93d0fdca3e417aec3334.json",
        "created_at": "2022-06-03 23:05:52 UTC",
        "processed_at": "2022-06-03 23:05:52 UTC",
        "google_url": "https://www.google.ca/search?q=pressure+treated+fencing&oq=pressure+treated+fencing&uule=w+CAIQICIWVG9yb250byxPbnRhcmlvLENhbmFkYQ&hl=en&gl=ca&tbm=shop&sourceid=chrome&ie=UTF-8",
        "raw_html_file": "https://serpapi.com/searches/4440b957994c04fe/629a93d0fdca3e417aec3334.html",
        "total_time_taken": 2.41
    }
    ,
    "search_parameters":
    {
        "engine": "google",
        "q": "pressure treated fencing",
        "location_requested": "Toronto, Ontario, Canada",
        "location_used": "Toronto,Ontario,Canada",
        "google_domain": "google.ca",
        "hl": "en",
        "gl": "ca",
        "device": "desktop",
        "tbm": "shop"
    }
    ,
    "search_information":
    {
        "shopping_results_state": "Results for exact spelling",
        "query_displayed": "pressure treated fencing"
    }
    ,
    "filters":
    [
        {
            "type": "Show only",
            "options":
            [
                {
                    "text": "Available nearby",
                    "tbs": "mr:1,local_avail:1,ss:55"
                }
            ]
        }
        ,
        {
            "type": "Price",
            "options":
            [
                {
                    "text": "Up to $60",
                    "tbs": "mr:1,price:1,ppr_max:60"
                }
                ,
                {
                    "text": "$60 – $150",
                    "tbs": "mr:1,price:1,ppr_min:60,ppr_max:150"
                }
                ,
                {
                    "text": "$150 – $500",
                    "tbs": "mr:1,price:1,ppr_min:150,ppr_max:500"
                }
                ,
                {
                    "text": "$500 – $1,500",
                    "tbs": "mr:1,price:1,ppr_min:500,ppr_max:1500"
                }
                ,
                {
                    "text": "Over $1,500",
                    "tbs": "mr:1,price:1,ppr_min:1500"
                }
            ]
        }
        ,
        {
            "type": "Colour",
            "options":
            [
                {
                    "tbs": "mr:1,color:specific,color_val:blue"
                }
            ]
        }
        ,
        {
            "type": "Brand",
            "options":
            [
                {
                    "text": "Backyard X Scapes",
                    "tbs": "mr:1,pdtr0:997763%7C1320318"
                }
                ,
                {
                    "text": "Yardgard",
                    "tbs": "mr:1,pdtr0:997763%7C4316996"
                }
                ,
                {
                    "text": "Vinyl Works",
                    "tbs": "mr:1,pdtr0:997763%7C1358322"
                }
                ,
                {
                    "text": "Nuvo Iron",
                    "tbs": "mr:1,pdtr0:997763%7C1370839"
                }
                ,
                {
                    "text": "Everbilt",
                    "tbs": "mr:1,pdtr0:997763%7C3365165"
                }
                ,
                {
                    "text": "Freedom",
                    "tbs": "mr:1,pdtr0:997763%7C1012185"
                }
                ,
                {
                    "text": "Milwaukee Tool",
                    "tbs": "mr:1,pdtr0:997763%7C1028752"
                }
            ]
        }
        ,
        {
            "type": "Product rating",
            "options":
            [
                {
                    "text": "4 and up",
                    "tbs": "mr:1,avg_rating:400"
                }
            ]
        }
        ,
        {
            "type": "Condition",
            "options":
            [
                {
                    "text": "New items",
                    "tbs": "mr:1,new:1"
                }
                ,
                {
                    "text": "Used items",
                    "tbs": "mr:1,new:3"
                }
            ]
        }
        ,
        {
            "type": "Seller",
            "options":
            [
                {
                    "text": "DK Hardware",
                    "tbs": "mr:1,merchagg:m2663876"
                }
                ,
                {
                    "text": "Grandado CAN",
                    "tbs": "mr:1,merchagg:m288173204"
                }
                ,
                {
                    "text": "Home Depot Canada",
                    "tbs": "mr:1,merchagg:g118891579%7Cm6472097"
                }
                ,
                {
                    "text": "RONA",
                    "tbs": "mr:1,merchagg:g117700075%7Cm102369895%7Cm6169538"
                }
            ]
        }
    ]
    ,
    "inline_shopping_results":
    [
        {
            "position": 1,
            "block_position": "top",
            "title": "SLIPFENCE Horizontal Channel kit for 6 ft. high fence",
            "price": "$80.00",
            "extracted_price": 80,
            "link": "https://www.google.ca/aclk?sa=l&ai=DChcSEwjl-JzQspL4AhVSyrMKHWK9Av8YABABGgJxbg&sig=AOD64_1Bnc1eGxYHNSSWN86TilFmGrhmGQ&ctype=5&q=&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQww8I8QU&adurl=",
            "source": "Home Depot Canada",
            "shipping": "Free delivery",
            "rating": 4,
            "reviews": 59,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQR97A58DYoW5Rub5d_rQR1vvDzGL0kZGW8lG4i8MOHwXQia2Zbx-Vu4fpjYTFVnSkVfRoxF3-88GAenwSqIp46Zp748WU3EwR-eGeDvMs&usqp=CAE"
        }
        ,
        {
            "position": 2,
            "block_position": "top",
            "title": "2 x 4 -8' Pressure Treated Wood Fence Rail",
            "price": "$10.56",
            "extracted_price": 10.56,
            "link": "https://www.google.ca/aclk?sa=l&ai=DChcSEwjl-JzQspL4AhVSyrMKHWK9Av8YABADGgJxbg&sig=AOD64_198v8JT9V95T7GaYWjTu1BDJ86kw&ctype=5&q=&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQww8I9QU&adurl=",
            "source": "ONLY Fencing",
            "shipping": "Free delivery",
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTojKqnztYoia7b9WneN4-wdh44WydIhq5rOVOSqNNDPTzyGcW4cklOzM5Y3zNjbz9GvSM6CW6QVrWZhCff9YBGRrkNvNfJ1YVwzM6DRlX6IVaGy6lNu_TEbQ&usqp=CAE"
        }
        ,
        {
            "position": 3,
            "block_position": "top",
            "title": "Fence - 6 x 8' Pre-Assembled "Shadow" Fence 73000668",
            "price": "$149.00",
            "extracted_price": 149,
            "link": "https://www.google.ca/aclk?sa=l&ai=DChcSEwjl-JzQspL4AhVSyrMKHWK9Av8YABAFGgJxbg&sig=AOD64_3bTFwYQj2KhLeGbhRdO0hQnHcCCA&ctype=46&q=&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQqygI-AU&adurl=",
            "source": "RONA",
            "rating": 3.5,
            "reviews": 7,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRtoOeghJVf4DUfjJZTeUlj_g4X1K9D39vyISH2zKXKROWEZQ9fXL4qh6xCjV4PHI6V-WWeiOnxgU8ydshInI_M10UXejm8ABhq0p5fw6qO3WrrngVysLne&usqp=CAE",
            "extensions":
            [
                "In store"
            ]
        }
        ,
        {
            "position": 1,
            "block_position": "bottom",
            "title": "Lasercutartsinc Geometric Squares Fence Toppers",
            "price": "$239.99",
            "extracted_price": 239.99,
            "link": "https://www.google.ca/aclk?sa=l&ai=DChcSEwjl-JzQspL4AhVSyrMKHWK9Av8YABB_GgJxbg&sig=AOD64_1SnH4-JHIzJfYQ26wMxyC6_bXwdA&ctype=5&q=&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ9A4I6ws&adurl=",
            "source": "Wayfair.ca",
            "shipping": "Free delivery",
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfXKJxOJMdarvruUhIZnv3m2KazW3zomwFA8bT6pVQ5wWEjz2iZFJX5Ur4ptk1Bi3466Tch2AVbyqr7UmUxDruu_8_BdzQVV2q9mtnZrw&usqp=CAE"
        }
        ,
        {
            "position": 2,
            "block_position": "bottom",
            "title": "1 x 6 –8’ Fence Picket",
            "price": "$8.48",
            "extracted_price": 8.48,
            "link": "https://www.google.ca/aclk?sa=l&ai=DChcSEwjl-JzQspL4AhVSyrMKHWK9Av8YABCBARoCcW4&sig=AOD64_0ieNnZFmNYd_tmGMyuWbzxwbNIrw&ctype=5&q=&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ9A4I7gs&adurl=",
            "source": "ONLY Fencing",
            "shipping": "Free delivery",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRSP1qHnac5ZlMu7W3hfPuJlznr460sdqPiF7-dB0Lle1H1XS_-yH4JMGbEnM-YbX77OhR1Q0u5NwbyMHCg5IMlyqgy9sXitw&usqp=CAE"
        }
        ,
        {
            "position": 3,
            "block_position": "bottom",
            "title": "Fence with Solid Lattice Top 17000354",
            "price": "$209.00",
            "extracted_price": 209,
            "link": "https://www.google.ca/aclk?sa=l&ai=DChcSEwjl-JzQspL4AhVSyrMKHWK9Av8YABCDARoCcW4&sig=AOD64_3ofIRkGAcJqLf-CX3R2rVbKThScw&ctype=46&q=&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQqSUI8Qs&adurl=",
            "source": "RONA",
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTThsfg86GHvna6SM7gAGdZVyK7JgspXIxrcBkwGfj1G-QH4m_F0ejYUbmxAQjq-dGdQ28cUeMPPCZR74lf3q-t6W1shXeNG96ZdIKiuA6jgarXkOmc3K7r&usqp=CAE",
            "extensions":
            [
                "In store"
            ]
        }
        ,
        {
            "position": 4,
            "block_position": "bottom",
            "title": "No-Dig Vinyl Picket Garden Fence 2 Pack (30in x 58in- Unassembled)",
            "price": "$136.08",
            "extracted_price": 136.08,
            "link": "https://www.google.ca/aclk?sa=L&ai=DChcSEwjl-JzQspL4AhVSyrMKHWK9Av8YABCFARoCcW4&sig=AOD64_1RTLVlhK55y7XU13Ats7_vqtLHYw&ctype=5&q=&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ9A4I9As&adurl=",
            "source": "Amazon CA",
            "shipping": "Free delivery",
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRtQntxatTe7r93F38wfbgyDly6gkOL5xFvw77inShWlOpXQ249xrhxJ-l4GqNtQ8szs5SGa_G8yZ67AV8vxkN_WuWa4TSWzaQ7kW65WRQ&usqp=CAE"
        }
        ,
        {
            "position": 5,
            "block_position": "bottom",
            "title": "TrexFencing 6 ft. H x 8 ft. W Composite Gate Finish: Saddle Brown",
            "price": "$3,799.99",
            "extracted_price": 3799.99,
            "link": "https://www.google.ca/aclk?sa=l&ai=DChcSEwjl-JzQspL4AhVSyrMKHWK9Av8YABCHARoCcW4&sig=AOD64_0wB2Fxpc60_kUFVqK8nlG-YAvSjA&ctype=5&q=&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ9A4I9ws&adurl=",
            "source": "Wayfair.ca",
            "shipping": "Free delivery",
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTe1qVID1HLy5NAys8OQOBTCk8BGSzX1PkxVMgHWzuP5JItGJr5-HJ4tu8DFvOMpaNEyX9k0Qh2BoTC31o0PBulYeZK2Ar9fGQCaAuw8hPP&usqp=CAE"
        }
        ,
        {
            "position": 6,
            "block_position": "bottom",
            "title": "Select Treated Wood Brown - 1 in x 6 in x 5 ft 120-191",
            "price": "$5.28",
            "extracted_price": 5.28,
            "link": "https://www.google.ca/aclk?sa=l&ai=DChcSEwjl-JzQspL4AhVSyrMKHWK9Av8YABCJARoCcW4&sig=AOD64_0gq_OLtMUcYumpJUNqnkoP64Sk2w&ctype=46&q=&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQqSUI-gs&adurl=",
            "source": "RONA",
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT736LovvlnpUylICy1U-YW3TRIcFvzG2MB6cTcd89TnpXDSTwiP5vPtHaGGgStxm9DXrithM87fTpDSeFgOzwEfOLPcdcHj4pgMNZLt5IoFsTjFhfs47Uc&usqp=CAE",
            "extensions":
            [
                "In store"
            ]
        }
        ,
        {
            "position": 7,
            "block_position": "bottom",
            "title": "1" x 6" x 8' Treated Wood Fence Board",
            "price": "$8.46",
            "extracted_price": 8.46,
            "link": "https://www.google.ca/aclk?sa=l&ai=DChcSEwjl-JzQspL4AhVSyrMKHWK9Av8YABCLARoCcW4&sig=AOD64_3RvcA5RyYKfrdbq1c2BjzMTUSukg&ctype=5&q=&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ9A4I_Qs&adurl=",
            "source": "biiibo.com",
            "shipping": "Free delivery",
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTDmBxJu92QoPwOnxQTmDTnZSUf4T_C7q-EqQIIuEO3IX3ROBZN1rUAl_lExfD-4R5CwiULC7G_tcjio-R_Nyi3UTAoP4W7YYVD7zTcWkY4K9go7x2nY1dOdA&usqp=CAE"
        }
        ,
        {
            "position": 8,
            "block_position": "bottom",
            "title": "Safety Fence - Standard, 6 x 100', Black - ULINE Canada - S-24123BL",
            "price": "$183.00",
            "extracted_price": 183,
            "link": "https://www.google.ca/aclk?sa=l&ai=DChcSEwjl-JzQspL4AhVSyrMKHWK9Av8YABCNARoCcW4&sig=AOD64_3Klgfg8tw31B13hZTVCw6V9y_RYw&ctype=5&q=&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ9A4IgAw&adurl=",
            "source": "ULINE Canada",
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRgL1MD4-SMzX_5unnlXW3jAyJu-4LGl5IhlxvRZTya19OACDYP3nEB5G3fkaVMi1qIwvfJEKf3L4drW1zBF8Pe5dHRsdZjbBp26u7XieaCEfAJI6xgVViq&usqp=CAE"
        }
        ,
        {
            "position": 9,
            "block_position": "bottom",
            "title": "Select Select Lumber - Pressure Treated - Brown - 4-in T x 4-in W x 6-ft L 120-120",
            "price": "$14.24",
            "extracted_price": 14.24,
            "link": "https://www.google.ca/aclk?sa=l&ai=DChcSEwjl-JzQspL4AhVSyrMKHWK9Av8YABCPARoCcW4&sig=AOD64_22xCbtxaTHWQmzo73rKG1_eGG7rw&ctype=46&q=&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQqSUIggw&adurl=",
            "source": "RONA",
            "rating": 2,
            "reviews": 15,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRboOkXtH2L66Dlg1e9XG6OTWSgn9Bh4x8_vvvaWjx8esVdVc-fIRNgx3BrnWBCHZ2FK0ao8kvcxaUTCuH0-r4ZWRDYjPWplHMHCYpKxjIC3PV6kKKwuS7e5g&usqp=CAE",
            "extensions":
            [
                "In store"
            ]
        }
        ,
        {
            "position": 10,
            "block_position": "bottom",
            "title": "Select Treated Wood - Brown - 1 in x 4 in x 8 ft 120-180",
            "price": "$6.96",
            "extracted_price": 6.96,
            "link": "https://www.google.ca/aclk?sa=l&ai=DChcSEwjl-JzQspL4AhVSyrMKHWK9Av8YABCRARoCcW4&sig=AOD64_3igrEQ5gkHCHamMDZ70_neDY5j_Q&ctype=46&q=&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQqSUIhgw&adurl=",
            "source": "RONA",
            "rating": 2,
            "reviews": 15,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTQWu-cHBMb8u0SQVjt_gyzkH3bG6ZRyo84XTKp32VCiS6_-9CU0SsGNCfDAGrxGED-haO3AAtvJdO2kEzM9QGoMG9ZpRxxyaVWglF_twaLRNpm6Sdf3qqNgw&usqp=CAE",
            "extensions":
            [
                "In store"
            ]
        }
        ,
        {
            "position": 11,
            "block_position": "bottom",
            "title": "Select Pressure Treated Wood Brown - 1 in x 6 in x 8 ft 120-193",
            "price": "$8.46",
            "extracted_price": 8.46,
            "link": "https://www.google.ca/aclk?sa=l&ai=DChcSEwjl-JzQspL4AhVSyrMKHWK9Av8YABCTARoCcW4&sig=AOD64_2QqaJorZGm6O72uprw5k7R4_Y7mg&ctype=46&q=&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQqSUIigw&adurl=",
            "source": "RONA",
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTg7hsEhydzfr8T4_8TNN7Pl8E3cLpR5mZ8q1_zv_gUyZUtmOhWcnLK5nx_5ajPH36d3jnHc6uFE7SF2bsg_mkCO-rJ6tbLL5A5QZTbgOlebsxI96VOb9Ox&usqp=CAE",
            "extensions":
            [
                "In store"
            ]
        }
        ,
        {
            "position": 12,
            "block_position": "bottom",
            "title": "Outdoor Essentials Dover 6 ft. H x 8 ft. W Vinyl Privacy Fence Panel Kit",
            "price": "$225.00",
            "extracted_price": 225,
            "link": "https://www.google.ca/aclk?sa=l&ai=DChcSEwjl-JzQspL4AhVSyrMKHWK9Av8YABCVARoCcW4&sig=AOD64_3YAXDkRCnzWOk2PUb3Ev2YhNbFaA&ctype=5&q=&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ9A4IjQw&adurl=",
            "source": "Home Depot Canada",
            "shipping": "Free delivery",
            "rating": 4,
            "reviews": 57,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRmWwtIHqbftvLddk3MSGmNAWl6q72iW1oQU4m6q4BQzzAZz2J-lq3CgDt4cAkCb6iQpMvhmFwj2yEcSdCUERPNyePTRlbhjq0ZJNCOVX7-Zm9lMoeb-Xq5&usqp=CAE"
        }
        ,
        {
            "position": 13,
            "block_position": "bottom",
            "title": "Patio Fence - 3 Panel Section - ULINE Canada - H-5183",
            "price": "$269.00",
            "extracted_price": 269,
            "link": "https://www.google.ca/aclk?sa=l&ai=DChcSEwjl-JzQspL4AhVSyrMKHWK9Av8YABCXARoCcW4&sig=AOD64_34-pCCZx9uJyCKcl5j4bBdztexNQ&ctype=5&q=&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ9A4IkQw&adurl=",
            "source": "ULINE Canada",
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRILA8obhAbbRCDc5mvhFWYeRacelX28EsSoYzdHdv7MVAPRec-4hqq0sMKCAUFVNhv9vg_ZPnrM3zaYwJRyh1nbG3F_UQDG7kJsfoJ-Vk-bacgyh7tIeVE&usqp=CAE"
        }
    ]
    ,
    "shopping_results":
    [
        {
            "position": 1,
            "title": "1 x 6 x 8' Pressure Treated Wood Fence Board",
            "link": "https://www.google.ca/url?url=https://www.homedepot.ca/product/micropro-sienna-1-x-6-x-8-pressure-treated-wood-fence-board/1000790631%3Feid%3DPS_GO_140203__ALL_PLA-526641%26pid%3D1000790631&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECIUG&usg=AOvVaw3puCGp5B4dN8_X8ZpzpPTq",
            "product_link": "https://www.google.ca/shopping/product/4347420909207307575",
            "product_id": "4347420909207307575",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=4347420909207307575",
            "source": "Home Depot Canada",
            "price": "$0.00",
            "extracted_price": 0,
            "rating": 3.2,
            "reviews": 138,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSyWARXKmdJmap5svcZ7woTysEVCWlg3WIXz4g1fu9PC8rdPciXb03Gevn994xDExDOuprMaDyVTpTuBSudW938OCJXolw&usqp=CAE",
            "delivery": "15.7 km · In stock"
        }
        ,
        {
            "position": 2,
            "title": "Pressure Treated Wood Lattice Top Fence Panel",
            "link": "https://www.google.ca/url?url=https://www.homedepot.ca/product/micropro-sienna-pressure-treated-wood-lattice-top-fence-panel/1000793725%3Feid%3DPS_GO_140203__ALL_PLA-526641%26pid%3D1000793725&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECJEG&usg=AOvVaw2LnzrpIMYJqQyj9aJVcGu0",
            "product_link": "https://www.google.ca/shopping/product/10039035517705371041",
            "product_id": "10039035517705371041",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=10039035517705371041",
            "source": "Home Depot Canada",
            "price": "$0.00",
            "extracted_price": 0,
            "rating": 3.2,
            "reviews": 25,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrV8-t8oUGAoWN_P4f4yh3juX-JMCvZaFyOq4SDYR3GD_-rxcDBL-U6ustGVgF-FzPbQLT9P4wPfNG8hPPq-KfZQMieFLg6g&usqp=CAE",
            "delivery": "13.9 km · In stock"
        }
        ,
        {
            "position": 3,
            "title": "Taiga Building Products 1-in x 6-in x 8-ft Brown Pressure Treated Fence Board",
            "link": "https://www.google.ca/url?url=https://lowes.ca/product/591437%3Fstore_code%3D2640&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECKAG&usg=AOvVaw0x9idiN9A-PbSu18lV7MJh",
            "product_link": "https://www.google.ca/shopping/product/12523980183079995772",
            "product_id": "12523980183079995772",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=12523980183079995772",
            "source": "Lowes.ca",
            "price": "$8.46",
            "extracted_price": 8.46,
            "rating": 5,
            "reviews": 1,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSKVS-s4QQGckkdqm_H7ORRZpTTnXLGWayafg6rS3gotGpKPYRDZiHOjb1HymbchhZVJUpw32L1e5cT1IxQyYgCXTjItNaYG_AeTeMJzlyq0vzUsfS9sdgfUw&usqp=CAE",
            "tag": "Curbside",
            "delivery": "16.7 km · In stock"
        }
        ,
        {
            "position": 4,
            "title": "2 x 4 -8' Pressure Treated Wood Fence Rail",
            "link": "https://www.google.ca/url?url=https://onlyfencing.ca/products/2x4-8-fence-rail&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECKsG&usg=AOvVaw3J6i4zO60zagFPEBkwEleJ",
            "source": "ONLY Fencing",
            "price": "$10.56",
            "extracted_price": 10.56,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSDvqHoSxxF-62iiTTMEyA8nQDFE6A34svAmWOK11VADHfq7l8H52HQGSgeoldyDnM554o_mYTEqqZ42f32EDjdWTBUBeTK0J9zOf_MxPu-OVxfape7grTvxg&usqp=CAE",
            "delivery": "Free delivery"
        }
        ,
        {
            "position": 5,
            "title": "1 x 4 x 8' Pressure Treated Wood (Above Ground Use Only)",
            "link": "https://www.google.ca/url?url=https://www.homedepot.ca/product/micropro-sienna-1-x-4-x-8-pressure-treated-wood-above-ground-use-only/1000827385%3Feid%3DPS_GO_140203__ALL_PLA-526641%26pid%3D1000827385&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECLYG&usg=AOvVaw06bQ4aHSionX8PVpAd_D-a",
            "product_link": "https://www.google.ca/shopping/product/5869317702804768182",
            "product_id": "5869317702804768182",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=5869317702804768182",
            "source": "Home Depot Canada",
            "price": "$0.00",
            "extracted_price": 0,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQZiZ7x2Lr2GAez5vR-RNalPHpG_hYmR1lplGLOkq8ZaGONuL5EGqurR9HnVUFXK3FgIMyJtUKVgMOekmhi_M1M4x_Ei8op&usqp=CAE",
            "delivery": "13.9 km · In stock"
        }
        ,
        {
            "position": 6,
            "title": "4 x 4 x 8' Pressure Treated Wood Post (Suitable for Ground Contact)",
            "link": "https://www.google.ca/url?url=https://www.homedepot.ca/product/micropro-sienna-4-x-4-x-8-pressure-treated-wood-post-suitable-for-ground-contact/1000790178%3Feid%3DPS_GO_140203__ALL_PLA-526641%26pid%3D1000790178&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECMMG&usg=AOvVaw2ySuQT-rX4bI-oNdQm4pve",
            "product_link": "https://www.google.ca/shopping/product/16871834340303944694",
            "product_id": "16871834340303944694",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=16871834340303944694",
            "source": "Home Depot Canada",
            "price": "$0.00",
            "extracted_price": 0,
            "rating": 2.8,
            "reviews": 143,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR_Qc6N-iG7Dvf4cAjxvVDFY4j4J2CuzsPnq3e3wrlEitS16dus1Ks3bH3iAcV_u7Vr3QIyBauONRmyKq8wpYRCba2jGHHJ&usqp=CAE",
            "delivery": "15.7 km · In stock"
        }
        ,
        {
            "position": 7,
            "title": "Fence - 6 X 8' Pre-Assembled Shadow Fence 73000668 - Reno-Depot",
            "link": "https://www.google.ca/url?url=https://www.rona.ca/en/product/fence-6-x-8-pre-assembled-shadow-fence-16915003%3FviewStore%3D55140&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECM8G&usg=AOvVaw1CoVE8e30Hadm-fPU2Ex_r",
            "product_link": "https://www.google.ca/shopping/product/16406823161797461379",
            "product_id": "16406823161797461379",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=16406823161797461379",
            "source": "RONA",
            "price": "$149.00",
            "extracted_price": 149,
            "rating": 3.4,
            "reviews": 7,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRs0ACx0XjrLOeKxukgmYe5q42ZKRMjQ4YCWfprI9Jl7ZUnsKH5ur7oUoturvRsMxIKWI9cAVJkmVWqN6qsSK0jULIEufE3PbEE8Dm_5R3nWmxsqCDG7JWo&usqp=CAE",
            "delivery": "16.8 km · In stock"
        }
        ,
        {
            "position": 8,
            "title": "2 x 2 x 8' Pressure Treated Wood (Above Ground Use Only)",
            "link": "https://www.google.ca/url?url=https://www.homedepot.ca/product/micropro-sienna-2-x-2-x-8-pressure-treated-wood-above-ground-use-only/1000791632%3Feid%3DPS_GO_140203__ALL_PLA-526641%26pid%3D1000791632&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECNwG&usg=AOvVaw3vfefuCLkx1_6GDQjmWwBk",
            "product_link": "https://www.google.ca/shopping/product/13626809898406903725",
            "product_id": "13626809898406903725",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=13626809898406903725",
            "source": "Home Depot Canada",
            "price": "$0.00",
            "extracted_price": 0,
            "rating": 3.1,
            "reviews": 395,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS2rJfpiHo53lLBUiK8fOPK5nz3lbXJx6HKbSbY_ueH61KoK1UtqdeJaWWbW4Q4oR5M41R62z5duLboLtrVWypYf_Q044qKUg&usqp=CAE",
            "delivery": "15.7 km · In stock"
        }
        ,
        {
            "position": 9,
            "title": "TrexFencing 6 ft. H x 8 ft. W Composite Gate Finish: Woodland Brown",
            "link": "https://www.google.ca/url?url=https://www.wayfair.ca/TrexFencing--6-ft.-H-x-8-ft.-W-Composite-Gate-TFG4DBLWKITPCF-L3361-K~TRXF1005.html%3Frefid%3DGPCCA446-TRXF1005_46571610%26PiID%255B%255D%3D46571610&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQguUECOgG&usg=AOvVaw0iqP8sX8nStzhJj0QGg8t-",
            "product_link": "https://www.google.ca/shopping/product/12763719702601527144",
            "product_id": "12763719702601527144",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=12763719702601527144",
            "source": "Wayfair.ca",
            "price": "$3,799.99",
            "extracted_price": 3799.99,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRN1U0zBizoQEdiS9zo16V2DQX4MFzcjQV-gtUoQPxJIoLMjAPyPxUcbDrCgkaxc5ck9WPSyY0zyoeb1GHOxhd8xMBzY0vI&usqp=CAE",
            "delivery": "Free delivery"
        }
        ,
        {
            "position": 10,
            "title": "Select Select Treated Wood - Brown - 1" x 6" x 6' 120-192",
            "link": "https://www.google.ca/url?url=https://www.rona.ca/en/product/select-treated-wood-brown-1-x-6-x-6-120-192-84895012%3FviewStore%3D55030&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECPQG&usg=AOvVaw101brxV3KWqJ1birUANK-h",
            "source": "RONA",
            "price": "$6.34",
            "extracted_price": 6.34,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHaN2xNn-030wP0DorzSE0j0WSGiYCxhPhJrota6LGqc78JZe4R90TuitjCbckV2rGwgreDXtljvUqdp_NcBtAeFwwNbTj-CofE3rd1jBCy_JN9L_lMjjw_w&usqp=CAE",
            "delivery": "15.9 km · In stock"
        }
        ,
        {
            "position": 11,
            "title": "6' x 8' Privacy Fence Panel",
            "link": "https://www.google.ca/url?url=https://kent.ca/en/6-x-8-privacy-fence-panel-1015905&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECP8G&usg=AOvVaw3-7d27SXWF_q7Ma_AR7j-o",
            "source": "Kent Building Supplies",
            "price": "$139.99",
            "extracted_price": 139.99,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4Ejs3QVEePCkMroBTyBjdBW8c76zo1S0DqckWrSk5T8ZFnTKETlrhUCNefNY2BzGPVBAcovLaHIRHqj5H9CMB3WB1sN7OPVqCigs_hTMz&usqp=CAE",
            "delivery": "$50.00 delivery"
        }
        ,
        {
            "position": 12,
            "title": "Western Red Cedar - 1x5 Tongue & Groove Fencing 5'",
            "link": "https://www.google.ca/url?url=https://shop.wood-source.com/products/western-red-cedar-1x5-tongue-groove-fencing%3Fvariant%3D39783338049625%26currency%3DCAD%26utm_medium%3Dproduct_sync%26utm_source%3Dgoogle%26utm_content%3Dsag_organic%26utm_campaign%3Dsag_organic&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECIoH&usg=AOvVaw0k1yYQj_rpTtSF5yvqKSHl",
            "source": "The Wood Source",
            "price": "$9.85",
            "extracted_price": 9.85,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZ8kxImq6L0Ci-pRVgFBJIIaEneXH6c_cgdoRWVxb_rqhfVqc8r6Wu9Xl4sKSiEN6rtlkZEGAwRZBoy0vsWN0e90irvupTD0M3Ch4X1wZLNNqPANX3TSWeKQ&usqp=CAE",
            "delivery": "$150.00 delivery"
        }
        ,
        {
            "position": 13,
            "title": "Barrette Airy Panel - Treated Wood - 48" X 71" - Tanatone Finish 73000679 - Reno ...",
            "link": "https://www.google.ca/url?url=https://www.rona.ca/en/product/barrette-airy-panel-treated-wood-72-in-x-48-in-tanatone-finish-73000679-10505147%3FviewStore%3D55140&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECJYH&usg=AOvVaw2QBMapov2EOf99xIEHWQ4x",
            "product_link": "https://www.google.ca/shopping/product/7962988534197750509",
            "product_id": "7962988534197750509",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=7962988534197750509",
            "source": "RONA",
            "price": "$139.00",
            "extracted_price": 139,
            "rating": 3,
            "reviews": 9,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQd31PWiCeT0D2AxHephB7pgCMXzC-ELfjV2MXDGdKQSj7Av_mugSVDamdSdPlgAXUlhP_uY8lcPzzwoJI7HziMjqi8kxz-UAIaut6uxKw&usqp=CAE",
            "delivery": "16.8 km · In stock"
        }
        ,
        {
            "position": 14,
            "title": "2 x 4 x 8' Grooved Pressure Treated Wood (Above Ground Use Only)",
            "link": "https://www.google.ca/url?url=https://www.homedepot.ca/product/micropro-sienna-2-x-4-x-8-grooved-pressure-treated-wood-above-ground-use-only/1000793822%3Feid%3DPS_GO_140203__ALL_PLA-526641%26pid%3D1000793822&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECKIH&usg=AOvVaw1_pabcdZ5ypzO1wj7CBS61",
            "product_link": "https://www.google.ca/shopping/product/14430245124428071276",
            "product_id": "14430245124428071276",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=14430245124428071276",
            "source": "Home Depot Canada",
            "price": "$0.00",
            "extracted_price": 0,
            "rating": 3.1,
            "reviews": 395,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSRQGmSH55ML38gVFrhd__YigBOBLomIEPpksXqCzxZ5b0xpGerUR1G4XMG1diVLLBQLfJtxEYlxtqKZFaojJafg2mroqiRGQ&usqp=CAE",
            "delivery": "15.7 km · In stock"
        }
        ,
        {
            "position": 15,
            "title": "HOFT Hoft Privacy Fence 8'",
            "link": "https://www.google.ca/url?url=https://www.tuds.ca/hoft-privacy-fence-102.html%3Fsource%3Dgooglebase%26srsltid%3DAWLEVJy9wIEpJa6lVaNmjIJdW0xUZLo6tBeLKituk14sUbibqFsZ5qQSA9E&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECK0H&usg=AOvVaw1GBK6Kz1_DGF7e5xn1htR4",
            "source": "The Ultimate Deck Shop",
            "price": "$189.99",
            "extracted_price": 189.99,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR73z9VFDiFYJ2lFfZTtHoT3-byPll76YmVcIv_d26Ag3M3xFC-wag1DdUJ_EPfN8Jkz-EfrYXN0Z9H8v62dW4lzga7yfztlt0UECpwnU_aCrZoKsyPkvmO1w&usqp=CAE",
            "delivery": "$75.00 delivery"
        }
        ,
        {
            "position": 16,
            "title": "Barrette 6X8-ft Lattice Top PT Wood Fence Panel",
            "link": "https://www.google.ca/url?url=https://lowes.ca/product/1958790%3Fstore_code%3D2640&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECLsH&usg=AOvVaw3evKbjU8iFBzBYSjUSFghu",
            "source": "Lowes.ca",
            "price": "$189.00",
            "extracted_price": 189,
            "extensions":
            [
                "Lattice"
            ]
            ,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUy82E--L3lB_7w4vDOSnUY659BC-01WBzvUI4prxeEBu0KIsiX8ykYsM9PmrFizFYvYffI_CWSDZYany0dxlaBwcWRDpBlwPg-QMpos5MUuGfBEL8bQih&usqp=CAE",
            "tag": "Curbside",
            "delivery": "16.7 km · In stock"
        }
        ,
        {
            "position": 17,
            "title": "1 x 6 -6' Fence Picket",
            "link": "https://www.google.ca/url?url=https://onlyfencing.ca/products/1x6-6-fence-board&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECMYH&usg=AOvVaw3QY7FtZz3iXLvuDwkAgoEw",
            "source": "ONLY Fencing",
            "price": "$6.36",
            "extracted_price": 6.36,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAKLm_0ED1TW1bFMf5ePJDAETa3zhABlu-FhHnuzSr-zps9l38gksaSz39H3XqnDJGNz3GjK5sXe1X3__rAx9gNx53v7htn75EFsBTCKY7fe9oVrqmoERx&usqp=CAE",
            "delivery": "Free delivery"
        }
        ,
        {
            "position": 18,
            "title": "1x6x6 Sugi Wood Fence Board",
            "link": "https://www.google.ca/url?url=https://www.homedepot.ca/product/sugi-1x6x6-sugi-wood-fence-board/1001623314%3Feid%3DPS_GO_140203__ALL_PLA-526641%26pid%3D1001623314&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECNEH&usg=AOvVaw051syfsy-uuuByZ-dEWLos",
            "product_link": "https://www.google.ca/shopping/product/6595444680894316803",
            "product_id": "6595444680894316803",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=6595444680894316803",
            "source": "Home Depot Canada",
            "price": "$0.00",
            "extracted_price": 0,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTODzEeMgdXC6_tFQAl08zSougoLl8P-aUsws-cCkkBIWPQ24nEcNno3uTCEmR3CHpWI0DAQ1Ez9lVsPmflH74l8_McBvuopw&usqp=CAE",
            "delivery": "13.9 km · In stock"
        }
        ,
        {
            "position": 19,
            "title": "Select Treated Wood Brown - 1 in x 6 in x 10 ft 120-194",
            "link": "https://www.google.ca/url?url=https://www.rona.ca/en/product/select-treated-wood-brown-1-in-x-6-in-x-10-ft-120-194-84895014%3FviewStore%3D55030&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECNwH&usg=AOvVaw2W2SzeHCvV3rz2kkxUHgrh",
            "source": "RONA",
            "price": "$10.58",
            "extracted_price": 10.58,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT1iwhKGWUtSbuYKn-kfJ0SfTPek1TJ4Sq5WI4f1XXC3tWS5OuNQSqw97JG8uLZF5rp3u2wfTHK8c1msQ5npcmHYhtOuAg0kpQ67dLOe7oevKiuTaQP8Cqw&usqp=CAE",
            "delivery": "15.9 km · Limited stock"
        }
        ,
        {
            "position": 20,
            "title": "1 x 6 –8’ Fence Picket",
            "link": "https://www.google.ca/url?url=https://onlyfencing.ca/products/1-x-6-8-pickets&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECOcH&usg=AOvVaw33LmzoCF2QMAfEFwowD96W",
            "source": "ONLY Fencing",
            "price": "$8.48",
            "extracted_price": 8.48,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRSP1qHnac5ZlMu7W3hfPuJlznr460sdqPiF7-dB0Lle1H1XS_-yH4JMGbEnM-YbX77OhR1Q0u5NwbyMHCg5IMlyqgy9sXitw&usqp=CAE",
            "delivery": "Free delivery"
        }
        ,
        {
            "position": 21,
            "title": "Barrette 6x4-ft Wood Fence Panel with Black Morse Insert",
            "link": "https://www.google.ca/url?url=https://lowes.ca/product/1857631%3Fstore_code%3D2640&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECPQH&usg=AOvVaw0-7ZACOMnpmlkf_UWGVTtX",
            "product_link": "https://www.google.ca/shopping/product/12116516293724064616",
            "product_id": "12116516293724064616",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=12116516293724064616",
            "source": "Lowes.ca",
            "price": "$199.00",
            "extracted_price": 199,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRKKw6XCKih4ORJKg9TsM7hDhqW9h11r8tsSB72IotY0SXIsoS6b9fewPZ0wySEDssGuDJLfH2oJEi3DtPmMfWIH05iQVjW9Hjv4ffVdcRhl2D9MYQtBMzr&usqp=CAE",
            "tag": "Curbside",
            "delivery": "16.7 km · In stock"
        }
        ,
        {
            "position": 22,
            "title": "Fence - 6 x 8' Pre-Assembled "Shadow" Fence 73000694",
            "link": "https://www.google.ca/url?url=https://www.rona.ca/en/product/fence-6-x-8-pre-assembled-shadow-fence-16915004%3FviewStore%3D55140&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECIAI&usg=AOvVaw2i4gBC-BZI__CC4IVF8ccQ",
            "source": "RONA",
            "price": "$189.00",
            "extracted_price": 189,
            "extensions":
            [
                "Lattice"
            ]
            ,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTapFvHx6v2VwHu3BF2IhyROOglqUafxS1fJEnPPcr7mNnw-ElpDB-3IyTjyHFM2KI6nxV2Ph5_E9Fw00UAnmRgJczB2rsz7Kwx9keUo2LN0XK_yxuY0mWb&usqp=CAE",
            "delivery": "16.8 km · In stock"
        }
        ,
        {
            "position": 23,
            "title": "4 x 4 -10' Fence Post",
            "link": "https://www.google.ca/url?url=https://onlyfencing.ca/products/4x4-10-fence-post&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECIsI&usg=AOvVaw3kIZLS9iOFYwJDHhksofi9",
            "source": "ONLY Fencing",
            "price": "$23.75",
            "extracted_price": 23.75,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSQf9vos_OSrW5H9bmm6EdbVptPBckKp2HbZTH_cBxJIMwqG_1guoV_yuHtB5HCBmHcBTg96wLegcYnKkHms5hJ-8wVwWFjmaJLIiaX7vMhqOLxt8wtRkQe&usqp=CAE",
            "delivery": "Free delivery"
        }
        ,
        {
            "position": 24,
            "title": "Trex Fencing 6 ft . X 8 ft. Trex Horizons Saddle Brown Fence Panel Kit 5-Pack",
            "link": "https://www.google.ca/url?url=https://www.homedepot.ca/product/trex-fencing-6-ft-x-8-ft-trex-horizons-saddle-brown-fence-panel-kit-5-pack/1001556387&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQguUECJcI&usg=AOvVaw2ZVDF9zxz6fdOqfOu645U8",
            "product_link": "https://www.google.ca/shopping/product/5116802087440128155",
            "product_id": "5116802087440128155",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=5116802087440128155",
            "source": "Home Depot Canada",
            "price": "$2,925.00",
            "extracted_price": 2925,
            "rating": 5,
            "reviews": 1,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRnbsRty6czVxeIN7i0-g3O0kB4CRDoyBRwFOHF8KsH7gD6aexrw07pp_UuRoDOXIscM5WR5sV44qft8Jt5ar-UwYqT6ZUt&usqp=CAE",
            "delivery": "$1,000.00 delivery"
        }
        ,
        {
            "position": 25,
            "title": "Wholesale Horizontal fence,1 Set",
            "link": "https://www.google.ca/url?url=https://www.alibaba.com/product-detail/Horizontal-fence-wpc-fence-panel-outdoor_62445178337.html%3Fmark%3Dgoogle_shopping%26seo%3D1&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECKII&usg=AOvVaw0-ZEx88nxrvn8WdkpOYYdf",
            "source": "Alibaba.com",
            "price": "$113.36",
            "extracted_price": 113.36,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRrmbDWiapCVqWYYZBaJ1AUJhD5d_JQeo8JxErH0FNCz4xqtVJbEVZj5YLO3TtkgGsLQ3G2dIA2WETrp-Z9eHfu3Cq5J3DQSTLjpmdmdQ3atZE7dJqTlh7D&usqp=CAE",
            "delivery": "$200.00 delivery"
        }
        ,
        {
            "position": 26,
            "title": "3.5 ft x 6 ft MicroPro Sienna Treated Wood Fence Gate",
            "link": "https://www.google.ca/url?url=https://www.homedepot.ca/product/micropro-sienna-35-ft-x-6-ft-micropro-sienna-treated-wood-fence-gate/1001697530%3Feid%3DPS_GO_140203__ALL_PLA-526641%26pid%3D1001697530&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECK4I&usg=AOvVaw0A7VLBaPEVoVMLr1AhsVr4",
            "product_link": "https://www.google.ca/shopping/product/1064436417184935382",
            "product_id": "1064436417184935382",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=1064436417184935382",
            "source": "Home Depot Canada",
            "price": "$0.00",
            "extracted_price": 0,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXR6yx5LbleCDxyQq5czfDgCiHzUiZR1lbtSmaN7o-A6jKrMkXhuKodT7OXz0qeyiz4pjwkcCdZGKh0fqXUtW9rytyP3n7&usqp=CAE",
            "delivery": "15.7 km · In stock"
        }
        ,
        {
            "position": 27,
            "title": "Select Treated Wood Brown - 4 in x 4 in x 6 ft 120-120",
            "link": "https://www.google.ca/url?url=https://www.rona.ca/en/product/select-lumber-pressure-treated-brown-4-in-t-x-4-in-w-x-6-ft-l-120-120-84895042%3FviewStore%3D55330&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECLsI&usg=AOvVaw0kEfvI71KdltP93zN82ATt",
            "product_link": "https://www.google.ca/shopping/product/8435665020662622330",
            "product_id": "8435665020662622330",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=8435665020662622330",
            "source": "RONA",
            "price": "$14.24",
            "extracted_price": 14.24,
            "rating": 1.9,
            "reviews": 15,
            "extensions":
            [
                "For Decks"
            ]
            ,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDevJBPhZ9cRg3eMtAxpLdOYF5anmexqQ_eVhlmNk3pXGyUY-WwnhoLNC0-RWvzNBRuQ8qHM64t3ESQCGeMY5fpSZB5tPnJN1vycR_Jz0OPZ2pcho91-Vp3Q&usqp=CAE",
            "delivery": "63.6 km · In stock"
        }
        ,
        {
            "position": 28,
            "title": "WamBam No-Dig BL19101 Nantucket Picket Vinyl Fence, White",
            "link": "https://www.google.ca/url?url=https://www.wayfair.ca/WamBam-NoDig-Fence--4-ft.-H-x-6-ft.-W-Nantucket-Vinyl-Fence-Panel-BL19101-L3361-K~WMBA1000.html%3Frefid%3DGPCCA446-WMBA1000&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQguUECMgI&usg=AOvVaw1d49QW32QRlaSpLSnNr-wW",
            "product_link": "https://www.google.ca/shopping/product/16124480296563571622",
            "product_id": "16124480296563571622",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=16124480296563571622",
            "source": "Wayfair.ca",
            "price": "$234.09",
            "extracted_price": 234.09,
            "rating": 4.5,
            "reviews": 174,
            "extensions":
            [
                "Chain Link"
            ]
            ,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQMLfvs9joZYzNVlcQkPyHCM0omjubtkZl4kW7setw2hVpyGC_uCt0ZRVm2zHRToacCKDidmPOlmUtlVeC3CnDFnROycHnYiRaTuabGxW8&usqp=CAE",
            "delivery": "Free delivery"
        }
        ,
        {
            "position": 29,
            "title": "Trex Fencing 6 ft . X 8 ft. Trex Seclusions Saddle Brown Fence Panel Kit 5-Pack",
            "link": "https://www.google.ca/url?url=https://www.homedepot.ca/product/trex-fencing-6-ft-x-8-ft-trex-seclusions-saddle-brown-fence-panel-kit-5-pack/1001551001&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQguUECNUI&usg=AOvVaw2P_3PEuu0slD4d1SHehK4d",
            "product_link": "https://www.google.ca/shopping/product/4300770737485163334",
            "product_id": "4300770737485163334",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=4300770737485163334",
            "source": "Home Depot Canada",
            "price": "$2,999.00",
            "extracted_price": 2999,
            "rating": 5,
            "reviews": 1,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIEkrhk8xEH0eRaFAVOZU2s6BvNvmCnKwtO-YSFCQiBzYnhq4_OGz731A6jAVsYD_h375bv622KuhE5kcMP48KU9RgiWSj&usqp=CAE",
            "delivery": "Free delivery"
        }
        ,
        {
            "position": 30,
            "title": "Taiga Select 1x6 Fence Board S4S",
            "link": "https://www.google.ca/url?url=https://www.tuds.ca/1x6-fence-board-s4s.html%3Fsource%3Dgooglebase%26srsltid%3DAWLEVJwT859djMETUeHWv3spCenu6q_x-7Ray1md1dyuh9JHxUKbuaRj1YI&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECOAI&usg=AOvVaw2dK4vLPdHbTzqZKQCmSZvV",
            "source": "The Ultimate Deck Shop",
            "price": "$6.29",
            "extracted_price": 6.29,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR4mUA4mvbnXEL0L_IiOp1eGVP5gCFYKkLI4bz7IuEUgTdxAj7_qiV2fr9z39QH08F-yzwDVs2c5Uv6eHBwWYVNv1PjGJXDWG4dtlLryEtAT12Dqhp4Jd0r&usqp=CAE",
            "delivery": "$75.00 delivery"
        }
        ,
        {
            "position": 31,
            "title": "F&G Supplies 10 x 1.2m (4Ft) Tall x 40mm Dia, Round Wooden Pressure Treated Fence ...",
            "link": "https://www.google.ca/url?url=https://bigamart.com/product/10-x-1-2m-4ft-tall-x-40mm-dia-round-wooden-pressure-treated-fence-posts-or-stakes-wood-ideal-for-staking-trees-and-plants&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQguUECOsI&usg=AOvVaw2AVRQV7umRvN4K4v8RI4sj",
            "product_link": "https://www.google.ca/shopping/product/1610333568846640069",
            "product_id": "1610333568846640069",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=1610333568846640069",
            "source": "bigamart.com",
            "price": "$81.86",
            "extracted_price": 81.86,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSgD-HJHttma7-uG7VZpTSEIiPnuZ3PWmkArdl6I3_dFwSFGTbFFPgOpcuJOtVztamVQL4DHONI0PMvduLEeAqLw71sODnszIB6ogwesMWROFzkw4rK6zKCYQ&usqp=CAE",
            "delivery": "$30.00 delivery"
        }
        ,
        {
            "position": 32,
            "title": "6' x 8' Moulded Stockade Fence Panel",
            "link": "https://www.google.ca/url?url=https://kent.ca/en/6-x-8-moulded-stockade-fence-panel-1015904&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECPcI&usg=AOvVaw0NGRkaj0REY0nH7CMWzb2w",
            "source": "Kent Building Supplies",
            "price": "$169.99",
            "extracted_price": 169.99,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQd1H5wHQ7uxjQ2c2--W5RDsGlRT_DRVBYJL33WxE2ig2H5Ls7YCvzzpD9Mc755KjR8WV5-Yb6jT-dvwaN9hT2NNDCDMR8NOXfR0JbKJkU&usqp=CAE",
            "delivery": "$50.00 delivery"
        }
        ,
        {
            "position": 33,
            "title": "Wood Picket Fence, White, 23-in x 35-in",
            "link": "https://www.google.ca/url?url=https://www.canadiantire.ca/en/pdp/wood-picket-fence-white-23-in-x-35-in-1590202p.1590202.html%23store%3D126&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECIMJ&usg=AOvVaw1EHsV3xeq_Ga1kwSMw4QjQ",
            "product_link": "https://www.google.ca/shopping/product/17014876166090765980",
            "product_id": "17014876166090765980",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=17014876166090765980",
            "source": "Canadian Tire",
            "price": "$8.99",
            "extracted_price": 8.99,
            "rating": 2.4,
            "reviews": 16,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcShtcO2UJky2xGwzp8EWgXfDkNcZ5gDKE1z4u3BtkWJPb7Eeykaq-yDJF4jOTCJ4TP7-qJoDC5UCyRQGPRYBa-ijjzl7ldPylOUZcruHa2mFikJNiH-qFa-4g&usqp=CAE",
            "delivery": "18.2 km · In stock"
        }
        ,
        {
            "position": 34,
            "title": "Trex Fencing 6 ft . X 8 ft. Trex Seclusions Woodland Brown Fence Panel Kit 5-Pack",
            "link": "https://www.google.ca/url?url=https://www.homedepot.ca/product/trex-fencing-6-ft-x-8-ft-trex-seclusions-woodland-brown-fence-panel-kit-5-pack/1001551003&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQguUECI8J&usg=AOvVaw3IK-yY6aeOwH_SJWULiUoH",
            "product_link": "https://www.google.ca/shopping/product/7137130528269523125",
            "product_id": "7137130528269523125",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=7137130528269523125",
            "source": "Home Depot Canada",
            "price": "$2,999.00",
            "extracted_price": 2999,
            "rating": 5,
            "reviews": 1,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfeSKYkvolBK8nz-MIirDINh7jbxMGj-_YAZ10KXzt-VF1k1QErphhaOekMTk1RbmoGXm-Lq7s14Q7etD6PfiQLfz73Dad&usqp=CAE",
            "delivery": "Free delivery"
        }
        ,
        {
            "position": 35,
            "title": "SLIPFENCE Vertical Stringer Kit",
            "link": "https://www.google.ca/url?url=https://www.homedepot.ca/product/slipfence-vertical-stringer-kit/1001075612%3Feid%3DPS_GO_140203__ALL_PLA-526641%26pid%3D1001075612&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECJsJ&usg=AOvVaw1u7IpLzZ7KHCo4UdektJfV",
            "product_link": "https://www.google.ca/shopping/product/1083429361203759443",
            "product_id": "1083429361203759443",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=1083429361203759443",
            "source": "Home Depot Canada",
            "price": "$149.00",
            "extracted_price": 149,
            "rating": 5,
            "reviews": 1,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRKgMTzhhychnPUHyq49N6wLXxukB7AScQ51_eXV-51zSTVjskJvtVzH7nN5N2v8ZD7ehAeUoVhFB6A5fqBa5peQp3Q5EAKFg&usqp=CAE",
            "delivery": "16.3 km · In stock"
        }
        ,
        {
            "position": 36,
            "title": "1X6X5 PREMIUM KNOTTY CEDAR FENCE BOARD",
            "link": "https://www.google.ca/url?url=https://www.homedepot.ca/product/porcupine-1x6x5-premium-knotty-cedar-fence-board/1000100122%3Feid%3DPS_GO_140203__ALL_PLA-526641%26pid%3D1000100122&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECKkJ&usg=AOvVaw1MJNWziTEEq1XSInX2kYQN",
            "product_link": "https://www.google.ca/shopping/product/18398042583279403306",
            "product_id": "18398042583279403306",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=18398042583279403306",
            "source": "Home Depot Canada",
            "price": "$0.00",
            "extracted_price": 0,
            "rating": 4.7,
            "reviews": 3536,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRrVr9VdvTCHt-xHbbmrGWacnYhq5Bi-c0oZSj1A5nGQkqlCX8B9OKJKmeUEafj5KfzrTVrEZSRcxkEJrrifbtf4HwKBTcu&usqp=CAE",
            "delivery": "15.7 km · In stock"
        }
        ,
        {
            "position": 37,
            "title": "Flex Fence",
            "link": "https://www.google.ca/url?url=https://www.mkrittenhouse.com/ca/flex-fence-louver-system%23prod_id%3D26801&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECLQJ&usg=AOvVaw0HvpbJ-uqmbkbCF95Adrry",
            "source": "Rittenhouse",
            "price": "$70.94",
            "extracted_price": 70.94,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ7xwC42IX1G20TRCqYYAAUhdLj67grSfJNy_FWktIextgDfci1CsSu4_CB1oYQWRnFALrkQB8mG3gOKCXDh9mcKp3WkQ6Jfw&usqp=CAE",
            "delivery": "$5.00 delivery"
        }
        ,
        {
            "position": 38,
            "title": "42" x 8' Gothic Picket Fence Panel",
            "link": "https://www.google.ca/url?url=https://kent.ca/en/42-x-8-gothic-picket-fence-panel-1015902&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECL8J&usg=AOvVaw2fYl9ISdopOLLU3iBH4kD-",
            "source": "Kent Building Supplies",
            "price": "$79.99",
            "extracted_price": 79.99,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQT5AcuSX-6U9H4HR0wrmrXjeLKxJQa7r6MLU8GpsvEH8FdKStyvcc15MPcQS95atL5bGb3HZ61Ilolgvn00_LHW0vjN4egcLUAaHmatC4&usqp=CAE",
            "delivery": "$50.00 delivery"
        }
        ,
        {
            "position": 39,
            "title": "Barrette 4-in x 6-ft Pre-Treated Wood Fence Privacy Panel w/ Black Sprig ...",
            "link": "https://www.google.ca/url?url=https://lowes.ca/product/1857632%3Fstore_code%3D2640&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECMwJ&usg=AOvVaw3JLwJBopdLv1tG3umZz9Wr",
            "product_link": "https://www.google.ca/shopping/product/4622102132867509195",
            "product_id": "4622102132867509195",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=4622102132867509195",
            "source": "Lowes.ca",
            "price": "$199.00",
            "extracted_price": 199,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTTdNBugHab49DQ_F2ifHPMqbqPhNI6zJh5uDBK1SlAMDBMiisnzZWTByPXOe2sXSB7z75-w69KRwZlOMf7GUJjwOro0bUbTYZQ9yDrNPXlcx5bY8Fl7nvTow&usqp=CAE",
            "tag": "Curbside",
            "delivery": "16.7 km · In stock"
        }
        ,
        {
            "position": 40,
            "title": "Brown Pressure Treated Posts 6x6 / 12'",
            "link": "https://www.google.ca/url?url=https://shop.wood-source.com/products/pergola-posts%3Fvariant%3D39297149763673%26currency%3DCAD%26utm_medium%3Dproduct_sync%26utm_source%3Dgoogle%26utm_content%3Dsag_organic%26utm_campaign%3Dsag_organic&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECNkJ&usg=AOvVaw0DRptzHeEZNPkwM0vDVp7k",
            "source": "The Wood Source",
            "price": "$68.28",
            "extracted_price": 68.28,
            "extensions":
            [
                "Post",
                "For Decks"
            ]
            ,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSwCOnjbfdaJ8OetLuewODZZP_MgDkfeTkx6ETxzpvgs27pH25qO9oQ9rmtHyJxDfO40ppFY9zuJpSEPLdMrQcMsIZUGN_2o3psNKD2Erp8gof0paGA01nmHQ&usqp=CAE",
            "delivery": "$150.00 delivery"
        }
        ,
        {
            "position": 41,
            "title": "Greenes Fence Greenes Fence Deluxe Wood Picket Fence (12-Pack)",
            "link": "https://www.google.ca/url?url=https://www.wayfair.ca/Greenes-Fence--Greenes-Fence-Deluxe-Wood-Picket-Fence-12Pack--RC75B12PK-L3361-K~HBYW1053.html%3Frefid%3DGPCCA446-HBYW1053&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECOQJ&usg=AOvVaw0uCrM5aowZve1YeAyfesqc",
            "source": "Wayfair.ca",
            "price": "$149.99",
            "extracted_price": 149.99,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR4J6DrHyti7Fk50jdzVx65BXad0Tg8ir6a0HFyY-0atAZsa6PbbpKD7KiEbrdqzuuohR_yoSPOY3SshZgdJnAVgo4Qb-5wDQ&usqp=CAE",
            "delivery": "Free delivery"
        }
        ,
        {
            "position": 42,
            "title": "Fence With Solid Lattice Top 17000354 - Reno-Depot",
            "link": "https://www.google.ca/url?url=https://www.rona.ca/en/product/fence-with-solid-lattice-top-17000354-3815025%3FviewStore%3D55140&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECPAJ&usg=AOvVaw3NgF9icnmlrsUEfFVf7Ibv",
            "product_link": "https://www.google.ca/shopping/product/10441643329144033393",
            "product_id": "10441643329144033393",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=10441643329144033393",
            "source": "RONA",
            "price": "$209.00",
            "extracted_price": 209,
            "rating": 2,
            "reviews": 1,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcROIOINZrPEClk4xqM-jW7nuB5HvMGsvoexXYpfSTXOzl4B3ptbEBlJdxf0Jmc0abaZph-OrVPiNwhIE-2VGecoIotzcR1D0WQPHE0rLyMF-z1bKLQUNG_M&usqp=CAE",
            "delivery": "16.8 km · In stock"
        }
        ,
        {
            "position": 43,
            "title": "WPC Fence Panels,1 Set",
            "link": "https://www.google.ca/url?url=https://www.alibaba.com/product-detail/WPC-Wood-Plastic-Composite-Fence-Panels_62445550252.html%3Fmark%3Dgoogle_shopping%26seo%3D1&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECPsJ&usg=AOvVaw3wJSpY1bMlqLI5b5pG61r1",
            "source": "Alibaba.com",
            "price": "$109.58",
            "extracted_price": 109.58,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmdUDyiTfCpEn46J2GKHJKUe2-0qbmE_HmO2F2ICAPer6wgFJQtTNGwJgZvokUAb1INXKEzXhTzaruAbRsX2n-BtT_pbkq466-kEbEyXMqA6bq2jWKQGMlHA&usqp=CAE",
            "delivery": "$300.00 delivery"
        }
        ,
        {
            "position": 44,
            "title": "Douglas Fir - 1x6 Fence Board 8'",
            "link": "https://www.google.ca/url?url=https://shop.wood-source.com/products/douglas-fir-1x6-fence-board%3Fvariant%3D39783338344537%26currency%3DCAD%26utm_medium%3Dproduct_sync%26utm_source%3Dgoogle%26utm_content%3Dsag_organic%26utm_campaign%3Dsag_organic&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECIcK&usg=AOvVaw2LRThTRvHy88-dqxgOyAoH",
            "source": "The Wood Source",
            "price": "$14.00",
            "extracted_price": 14,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTTyI3rFZ4EXTNjQNE2Sz5tlogHXxcb0flBqa4wruCLjC0tToSm58DBe0AFS1Cbij6DfTPyRxnSiEEnDtC-eLqRjznyh9EeCU6UUUWzCueHrbsE9TsfOvqseg&usqp=CAE",
            "delivery": "$150.00 delivery"
        }
        ,
        {
            "position": 45,
            "title": "Trunorth Composite Fencing - On Sale 8% Off Spring '22 (Use Code "fence8") Sand ...",
            "link": "https://www.google.ca/url?url=https://www.compositedeckdirect.com/products/composite-fencing%3Fvariant%3D39647665062067&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECJIK&usg=AOvVaw1QWB2uT6uf72hQEheqBsKQ",
            "source": "Composite Deck Direct",
            "price": "$39.00",
            "extracted_price": 39,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSBYHOMezTv5_-EGnbc-mutoSYuq73Z1fd7dV7OB5GMe13W1Err6b_0ARHbH8h0ySu52HeAoG8QUdZDdkRrSMjlMSKVYTS-qZ5ZSs9Wnwk&usqp=CAE",
            "delivery": "$249.00 delivery"
        }
        ,
        {
            "position": 46,
            "title": "Western Red Cedar SertiWOOD Battens-Screen Slats (21 Pack) 1.65m2 Contemporary ...",
            "link": "https://www.google.ca/url?url=https://www.etsy.com/ca/listing/752940276/western-red-cedar-sertiwood-battens%3Fgpla%3D1%26gao%3D1%26&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECJ0K&usg=AOvVaw0o0rCBuBwmmGKGX0-eN3JI",
            "source": "Etsy - TimberFocus",
            "price": "$258.40",
            "extracted_price": 258.4,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT2A95md5dxgBszotxN9U6u4-cAzOBfQjbpS2AHKyZS87oxQ0JT7f3_WPEdhf9Du7EWCSY_b4rFd6GR9aZk5cJF5O7MjiE20TB9Ubc26Ymo&usqp=CAE",
            "delivery": "$118.04 delivery"
        }
        ,
        {
            "position": 47,
            "title": "Trex Fencing 6 ft . X 8 ft. Trex Seclusions Winchester Grey Fence Panel Kit 5-Pack",
            "link": "https://www.google.ca/url?url=https://www.homedepot.ca/product/trex-fencing-6-ft-x-8-ft-trex-seclusions-winchester-grey-fence-panel-kit-5-pack/1001551002&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQguUECKkK&usg=AOvVaw22dANtwMmnCzbV30JGhFIl",
            "product_link": "https://www.google.ca/shopping/product/8809149271187815981",
            "product_id": "8809149271187815981",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=8809149271187815981",
            "source": "Home Depot Canada",
            "price": "$2,999.00",
            "extracted_price": 2999,
            "rating": 5,
            "reviews": 1,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQtfOiXKe7GNHl7sWdBw4u8-qRwUHoaoUDNAeIefLg_CbBjYUAoNAFBClMkck8VZ4WKkGqGsUTN-n-TLi9QfgtOtlmXCfVJoQ&usqp=CAE",
            "delivery": "Free delivery"
        }
        ,
        {
            "position": 48,
            "title": "Trex Fencing 6 ft . X 8 ft. Trex Horizons Winchester Grey Fence Panel Kit 5-Pack",
            "link": "https://www.google.ca/url?url=https://www.homedepot.ca/product/trex-fencing-6-ft-x-8-ft-trex-horizons-winchester-grey-fence-panel-kit-5-pack/1001556388&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQguUECLUK&usg=AOvVaw1LQpo_OTiMicVRidcW7gq1",
            "product_link": "https://www.google.ca/shopping/product/7912280466106580576",
            "product_id": "7912280466106580576",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=7912280466106580576",
            "source": "Home Depot Canada",
            "price": "$2,925.00",
            "extracted_price": 2925,
            "rating": 5,
            "reviews": 1,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTFcAWOE3kodb5QOVUZDVDfcwPy2LsrSxpVtW8Y2G4o82OrO8rXGauS7zWq6hz_dDpZfT9rmzvci675lQuqUvdeq72FGZmQeQ&usqp=CAE",
            "delivery": "$1,000.00 delivery"
        }
        ,
        {
            "position": 49,
            "title": "Outdoor Essentials 6 ft. H x 8 ft. W Pro Series Hudson Vinyl Fencing 69"H X 94"W ...",
            "link": "https://www.google.ca/url?url=https://www.homedepot.ca/product/outdoor-essentials-dover-6-ft-h-x-8-ft-w-vinyl-privacy-fence-panel-kit/1001320515&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQguUECMEK&usg=AOvVaw2WecJb6vRhwznNNp9DvDB_",
            "product_link": "https://www.google.ca/shopping/product/14788977594447877273",
            "product_id": "14788977594447877273",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=14788977594447877273",
            "source": "Home Depot Canada",
            "price": "$225.00",
            "extracted_price": 225,
            "rating": 4.2,
            "reviews": 57,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQnhmiQNcL72o0yp0ffwF51BiSsPuftKf49wCG1r9crNUSatmFM3glUaDl8UmkaQNQus3mW4czGgwzeZzb7j_RSLHB-XF2L&usqp=CAE",
            "delivery": "Free delivery"
        }
        ,
        {
            "position": 50,
            "title": "6' x 8' Shadow Box Fence Panel",
            "link": "https://www.google.ca/url?url=https://kent.ca/en/6-x-8-shadow-box-fence-panel-1015907&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECMwK&usg=AOvVaw2q20wqqwMtWZcrVesGhrS4",
            "source": "Kent Building Supplies",
            "price": "$179.99",
            "extracted_price": 179.99,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRX5LJ_HNjKIavA9b_jh-9SEw94ea_rMChqfouRVyX14hiC56TSe03boFwfkT7h11Aa9USdLKaWOYtarzWRttIX2EQBob-wgiNt2oFlG8mUCjpJspxCTl9qaA&usqp=CAE",
            "delivery": "$50.00 delivery"
        }
        ,
        {
            "position": 51,
            "title": "Modinex 2 ft. H x 4 ft. W Cabo WPC Composite Fencing Finish: Espresso 24"H X 48"W ...",
            "link": "https://www.google.ca/url?url=https://www.wayfair.ca/Modinex--2-ft.-H-x-4-ft.-W-Cabo-WPC-Composite-Fencing-USAMOD1E-USAMOD1C-L3361-K~MDNX1006.html%3Frefid%3DGPCCA446-MDNX1006_25600523%26PiID%255B%255D%3D25600523&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQguUECNgK&usg=AOvVaw23Nu2JsvUk3I8AtZc3zspi",
            "product_link": "https://www.google.ca/shopping/product/10582478790090524469",
            "product_id": "10582478790090524469",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=10582478790090524469",
            "source": "Wayfair.ca",
            "price": "$102.99",
            "extracted_price": 102.99,
            "rating": 4.9,
            "reviews": 9,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT2-kNFdUBRCpTdB17tZJPB9gwjNjL5D5JbcgSp2c-fECA2yRi61M0H7DVIdXMp64X6ueDBBNAS9I-MkbCKvRghcusEipWHIg&usqp=CAE",
            "delivery": "Free delivery"
        }
        ,
        {
            "position": 52,
            "title": "Fence Panel - 6' x 6' - Contemporary - Preserved Wood - Brown 73000675",
            "link": "https://www.google.ca/url?url=https://www.rona.ca/en/product/fence-panel-6-x-6-contemporary-preserved-wood-brown-73000675-10505081%3FviewStore%3D55140&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ_uQECOMK&usg=AOvVaw2o3K55MTnPt_mA62L0do9l",
            "source": "RONA",
            "price": "$169.00",
            "extracted_price": 169,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXCXvpe4npszDbfNSadzhG7MT8AG1ePY5uUywvuXNIuf7geNMeOfSZD2AjzlhrnEdS2lh6fIQn5yK9ucLofLXxdtodXHGJvvyUqTAj0AP8S7Lw7FP4oU5ynA&usqp=CAE",
            "delivery": "16.8 km · In stock"
        }
        ,
        {
            "position": 53,
            "title": "6 x 6 - 10' Fence Post",
            "link": "https://www.google.ca/url?url=https://onlyfencing.ca/products/6x6-10-fence-post&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECO4K&usg=AOvVaw3-si08cV8ZtqFkA1yVmn2n",
            "source": "ONLY Fencing",
            "price": "$58.13",
            "extracted_price": 58.13,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTA4geo2XMwZ77wZms5SxozQIZ7oZNCYU9T_Qd1B9TdJWcTnX1aletlmdRH_-2FIRs3Uj3xINLijxQzf0lYAquSEpwJWMM6s5JUCJG-8wfBLyXY18o4s5eArQ&usqp=CAE",
            "delivery": "Free delivery"
        }
        ,
        {
            "position": 54,
            "title": "Laser Cut Privacy Fencing Panel,10 Pieces",
            "link": "https://www.google.ca/url?url=https://www.alibaba.com/product-detail/Powder-Coated-Finishing-Aluminum-Decorative-Laser_62285359487.html%3Fmark%3Dgoogle_shopping%26seo%3D1&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECPkK&usg=AOvVaw2OYTZCNn4TN8PbeV4BRmMU",
            "source": "Alibaba.com",
            "price": "$628.53",
            "extracted_price": 628.53,
            "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcShu4xHhFcfUrHutu238SOiD3tashSuFF2rasspqJiZ0GBvbluZlx_KIMgLVxvtnpL_D2bqKQ0i7gnWDP1xtylnrZ95GpggCWeFTz8PRZk&usqp=CAE",
            "delivery": "$300.00 delivery"
        }
        ,
        {
            "position": 55,
            "title": "Natural Wood Fence - Case of 24",
            "link": "https://www.google.ca/url?url=https://www.dollarama.com/en-CA/p-natural-wood-fence/3062602&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQguUECIUL&usg=AOvVaw0y0jwOHs8Gm5xNMpQvVGB2",
            "product_link": "https://www.google.ca/shopping/product/184825143974010584",
            "product_id": "184825143974010584",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=184825143974010584",
            "source": "Dollarama",
            "price": "$96.00",
            "extracted_price": 96,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQOwN1_Re0hOPoMpURz-CCgXMf0NgtqBRpvgpF4in-FnLxxwUDvyCZLZhMOjq-2kcLiA3aNj4BVRbEpNj0EX9TISDZhwNBdsQjnxL0p0NbyGEfc2Q4ae-Ch8Q&usqp=CAE",
            "delivery": "$999.00 delivery"
        }
        ,
        {
            "position": 56,
            "title": "Post 6"X6"X16' Pres-Treated (Each)",
            "link": "https://www.google.ca/url?url=https://www.internationalsafety.com/skus/stinson-owl-lite-b6-6-16-prs-post-6-x6-x16-pres-treated-each&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECJAL&usg=AOvVaw10pls1jhRsfXweE4Jk4SYJ",
            "source": "InternationalSafety.com",
            "price": "$1.00",
            "extracted_price": 1,
            "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSF2VCaQ2r0yXHg91SbS_JuROQUcss5A8JxW3bfS1MVKQUC-zL57zomjMoyutfxT0BFr1aqSRQ0NddQ3L1rdqPMWnxvN2xa&usqp=CAE",
            "delivery": "$11.00 delivery"
        }
        ,
        {
            "position": 57,
            "title": "Modinex 2 ft. H x 4 ft. W WPC Fence Panel Finish: Espresso 24"H X 48"W X 1"D",
            "link": "https://www.google.ca/url?url=https://www.wayfair.ca/Bay-Isle-Home%25E2%2584%25A2--4-ft.-H-x-2-ft.-W-Fancher-WPC-Composite-Fencing-X116519501-L3361-K~C002406094.html%3Frefid%3DGPCCA446-C002406094_2122211123%26PiID%255B%255D%3D2122211123&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQguUECJ4L&usg=AOvVaw0k1nRUh7K_tjJtb9bicZgB",
            "product_link": "https://www.google.ca/shopping/product/6706101901740903099",
            "product_id": "6706101901740903099",
            "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&product_id=6706101901740903099",
            "source": "Wayfair.ca",
            "price": "$104.99",
            "extracted_price": 104.99,
            "rating": 4.7,
            "reviews": 15,
            "extensions":
            [
                "Lattice"
            ]
            ,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTosao-bXUPtTajxaETuwSBiJXm3btafS6CHOsdeXgC8rS2dfNT6IBQTmcf982pyEOrEdKSHhqFzlOhbNnnk5yH_tL5hqsPXQ&usqp=CAE",
            "delivery": "Free delivery"
        }
        ,
        {
            "position": 58,
            "title": "Brown Pressure Treated Posts 4x4 / 12'",
            "link": "https://www.google.ca/url?url=https://shop.wood-source.com/products/pergola-posts%3Fvariant%3D39297149468761%26currency%3DCAD%26utm_medium%3Dproduct_sync%26utm_source%3Dgoogle%26utm_content%3Dsag_organic%26utm_campaign%3Dsag_organic&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECKsL&usg=AOvVaw3qWWcfAZm1veFFPu2L9hWU",
            "source": "The Wood Source",
            "price": "$27.48",
            "extracted_price": 27.48,
            "extensions":
            [
                "Post",
                "For Decks"
            ]
            ,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSCqxYS2xV5KNf_NxcBtTDzM7ZvTUQsOlQMZPlqwTWnk2q0f_TMnuMQgyMiNLGTgCnLHayhD5GbswnxTh2K7JGnwMb_0PpUhO4a-cWnptN6yGF1KPmbL2L2&usqp=CAE",
            "delivery": "$150.00 delivery"
        }
        ,
        {
            "position": 59,
            "title": "Retractable Wooden Expanding Fence Decorative Wooden Fence Pet Safety Fence for ...",
            "link": "https://www.google.ca/url?url=https://s.click.aliexpress.com/deep_link.htm%3Faff_short_key%3DUneMJZVf%26dl_target_url%3Dhttps%253A%252F%252Fwww.aliexpress.com%252Fitem%252F1005002906446899.html%253F_randl_currency%253DCAD%2526_randl_shipto%253DCA%2526src%253Dgoogle&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQgOUECLgL&usg=AOvVaw1LlXCDFy8ohft1sIpMvGAz",
            "source": "AliExpress.com",
            "price": "$10.51",
            "extracted_price": 10.51,
            "extensions":
            [
                "SALE"
            ]
            ,
            "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQEUsSz2t4sSHStX-ejCFz-ZohmKQdjqg72BJczjEN85ySJNfzVTnWE1If7OyBsh_C6-RTiHenkqOL0UXcWWernvgNA-GEkAh05Ft5L7A34&usqp=CAE",
            "tag": "SALE",
            "delivery": "$48.88 delivery"
        }
    ]
    ,
    "pagination":
    {
        "current": 1,
        "next": "https://www.google.ca/search?q=pressure+treated+fencing&gl=ca&hl=en&tbs=vw:d&tbm=shop&ei=0ZOaYvr9F62p_QaknrrIBQ&start=60&sa=N&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ8NMDCKkM",
        "other_pages":
        {
            "https://www.google.ca/search?q=pressure+treated+fencing&gl=ca&hl=en&tbs=vw:d&tbm=shop&ei=0ZOaYvr9F62p_QaknrrIBQ&start=60&sa=N&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ8tMDCJsM",
            "https://www.google.ca/search?q=pressure+treated+fencing&gl=ca&hl=en&tbs=vw:d&tbm=shop&ei=0ZOaYvr9F62p_QaknrrIBQ&start=120&sa=N&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ8tMDCJ0M",
            "https://www.google.ca/search?q=pressure+treated+fencing&gl=ca&hl=en&tbs=vw:d&tbm=shop&ei=0ZOaYvr9F62p_QaknrrIBQ&start=180&sa=N&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ8tMDCJ8M",
            "https://www.google.ca/search?q=pressure+treated+fencing&gl=ca&hl=en&tbs=vw:d&tbm=shop&ei=0ZOaYvr9F62p_QaknrrIBQ&start=240&sa=N&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ8tMDCKEM",
            "https://www.google.ca/search?q=pressure+treated+fencing&gl=ca&hl=en&tbs=vw:d&tbm=shop&ei=0ZOaYvr9F62p_QaknrrIBQ&start=300&sa=N&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ8tMDCKMM",
            "https://www.google.ca/search?q=pressure+treated+fencing&gl=ca&hl=en&tbs=vw:d&tbm=shop&ei=0ZOaYvr9F62p_QaknrrIBQ&start=360&sa=N&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ8tMDCKUM",
            "https://www.google.ca/search?q=pressure+treated+fencing&gl=ca&hl=en&tbs=vw:d&tbm=shop&ei=0ZOaYvr9F62p_QaknrrIBQ&start=420&sa=N&ved=0ahUKEwi6qpfQspL4AhWtVN8KHSSPDlkQ8tMDCKcM"
        }
    }
    ,
    "serpapi_pagination":
    {
        "current": 1,
        "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&q=pressure+treated+fencing&start=60&tbm=shop&tbs=vw%3Ad",
        "next": "https://serpapi.com/search.json?device=desktop&engine=google&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&q=pressure+treated+fencing&start=60&tbm=shop&tbs=vw%3Ad",
        "other_pages":
        {
            "https://serpapi.com/search.json?device=desktop&engine=google&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&q=pressure+treated+fencing&start=60&tbm=shop&tbs=vw%3Ad",
            "https://serpapi.com/search.json?device=desktop&engine=google&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&q=pressure+treated+fencing&start=120&tbm=shop&tbs=vw%3Ad",
            "https://serpapi.com/search.json?device=desktop&engine=google&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&q=pressure+treated+fencing&start=180&tbm=shop&tbs=vw%3Ad",
            "https://serpapi.com/search.json?device=desktop&engine=google&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&q=pressure+treated+fencing&start=240&tbm=shop&tbs=vw%3Ad",
            "https://serpapi.com/search.json?device=desktop&engine=google&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&q=pressure+treated+fencing&start=300&tbm=shop&tbs=vw%3Ad",
            "https://serpapi.com/search.json?device=desktop&engine=google&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&q=pressure+treated+fencing&start=360&tbm=shop&tbs=vw%3Ad",
            "https://serpapi.com/search.json?device=desktop&engine=google&gl=ca&google_domain=google.ca&hl=en&location=Toronto%2C+Ontario%2C+Canada&q=pressure+treated+fencing&start=420&tbm=shop&tbs=vw%3Ad"
        }
    }
}