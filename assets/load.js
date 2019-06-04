var root = document.body

function open() {
    alert("hi")
}

var Menu = {
    view: function () {
        return m("div")
    }
}

var Hamburg = {
    view: function () {
        return m("a", {
            class: "navbar-item image has-text-black center",
            onclick: open
        }, m("i", {
            class: "fas fa-bars"
        }))
    }
}

var ContactLink = {
    view: function () {
        return m("a[href=/contact]", {
            class: "navbar-item is-transparent has-text-black desktop",
            oncreate: m.route.link
        }, "CONTACT")
    }
}

var ColumnRight = {
    view: function () {
        return m("div", {
            class: "column right heading has-text-weight-bold has-text-black"
        }, [m(ContactLink), m(Hamburg), m(Menu)])
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
