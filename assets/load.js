var root = document.body

var Hamburg = {
    view: function() {
        return m("figure", {class: "navbar-item image has-text-black center"}, m("i", {class:"fas fa-bars"})
    )}
}

var Contact = {
    view: function() {
        return m("a", {href: "/contact", class: "navbar-item is-transparent desktop"
        }, "CONTACT")
    }
}

var ColumnRight = {
    view: function() {
        return m("div", {class: "column right heading has-text-weight-bold has-text-black"}, [m(Contact), m(Hamburg)]
    )}
}

var Name = {
    view: function() {
        return m("div", {class: "name"}, "Alvin Laberinto")
    }
}

var ColumnLeft = {
    view: function() {
        return m("div", {class: "column left has-text-black"}, m(Name)
    )}
}

var Columns = {
    view: function() {
        return m("div",
                 {class: "columns is-mobile is-marginless"},
                 [m(ColumnLeft), m(ColumnRight)]
    )}
}

var Hero = {
    view: function() {
        return m("div", {class: "hero-head"}, m(Columns)
    )}
}

var Section = {
    view: function() {
        return m("section", {class: "hero is-fullheight animated fadeInUp delay-1s"}, m(Hero)
    )}
}

m.mount(root, Section)
