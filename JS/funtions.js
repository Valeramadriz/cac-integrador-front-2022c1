const porcentaje = {
    "1": 0.2,
    "2": 0.5,
    "3": 0.85
};

function Resumen() {
    const form = document.getElementById("tickets");
    const cantidad = form.elements["cant"];
    const categoria = form.elements["cat"];
    const sCat = categoria.options[categoria.selectedIndex];
    let total = form.elements["total"];
    total.value = "Total a pagar: $" + (cantidad.value * 200 * Precio[sCat.value]);
}

function resetForm() {
    const form = document.getElementById("tickets");
    form.reset();
}