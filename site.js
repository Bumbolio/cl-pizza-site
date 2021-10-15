var menu = [
    {
        name: "Salads",
        menuItems: [
            {
                name: "Louie's Chef Salad",
                price: "$7.50"
            },
            {
                name: "Caesar Salad",
                price: "$9.00"
            }
        ]
    },
    {
        name: "Sandwiches",
        menuItems: [
            {
                name: "Steak Hoagie",
                price: "$4.25"
            },
            {
                name: "Stromboli",
                price: "$5.00"
            }
        ]
    },
    {
        name: "Appetizers",
        menuItems: [
            {
                name: "Bread Sticks",
                price: "$4.25"
            },
            {
                name: "Fries",
                price: "$5.00"
            }
        ]
    }
]

var menuDiv = document.querySelector("#menu");

menu.forEach((section) => {
    var element = document.createElement("h2");
    element.innerHTML = section.name;
    menuDiv.appendChild(element);

    section.menuItems.forEach((menuItem) => {
        var paragraph = document.createElement("p");
        paragraph.innerHTML .= menuItem.name;
        menuDiv.appendChild(paragraph);
    })
})

//console.log(menu[1].menuItems[0].name);