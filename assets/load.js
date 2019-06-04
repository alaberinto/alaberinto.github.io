var root = document.body

var Hamburg = {
    view: function () {
        return m("a", {
            class: "navbar-item image has-text-black center is-hoverable",
            onclick: open
        }, m("i", {
            class: "fas fa-bars"
        }))
    }
}

var Menu = {
    view: function() {
        return m("div", {
            class: "dropdown-menu",
            role: "menu"
        }, m("a[href=/contact]", {
            class: "navbar-item has-text-black right",
            oncreate: m.route.link
        }, "CONTACT"))
    }
}

var Trigger = {
    view: function () {
        return m("div", {
            class: "dropdown-trigger"
        }, m(Hamburg))
    }
}

var Dropdown = {
    view: function () {
        return m("div", {
            class: "dropdown is-hoverable is-right"
        }, [m(Trigger), m(Menu)])
    }
}

var ContactLink = {
    view: function () {
        return m("a[href=/contact]", {
            class: "navbar-item has-text-black desktop",
            oncreate: m.route.link
        }, "CONTACT")
    }
}

var ColumnRight = {
    view: function () {
        return m("div", {
            class: "column right heading has-text-weight-bold"
        }, [m(ContactLink), m(Dropdown)])
    }
}

var Name = {
    view: function () {
        return m("div", {
            class: "name"
        }, "Alvin Laberinto")
    }
}

var ColumnLeft = {
    view: function () {
        return m("div", {
            class: "column left has-text-black"
        }, m(Name))
    }
}

var Columns = {
    view: function () {
        return m("div", {
                class: "columns is-mobile is-marginless"
            },
                 [m(ColumnLeft), m(ColumnRight)]
        )
    }
}

var Hero = {
    view: function () {
        return m("div", {
            class: "hero-head"
        }, m(Columns))
    }
}

var Home = {
    view: function () {
        return m("section", {
            class: "hero is-fullheight animated fadeInUp delay-1s"
        }, m(Hero))
    }
}

var Contact = {
    view: function () {
        return "Hello!"
    }
}

m.route(root, "/", {
    "/": Home,
    "/contact": Contact,
})
