/* ── Toggle sidebar en móvil ── */
const sidebar = document.getElementById('sidebar');
const layout = document.getElementById('layout');
const menuBtn = document.getElementById('menuBtn');
const sidebarToggle = document.getElementById('sidebarToggle');
const overlay = document.getElementById('overlay');

function openSidebar() {
    sidebar.classList.add('sidebar--open');
    overlay.classList.add('overlay--visible');
    menuBtn.setAttribute('aria-expanded', 'true');
}

function closeSidebar() {
    sidebar.classList.remove('sidebar--open');
    overlay.classList.remove('overlay--visible');
    menuBtn.setAttribute('aria-expanded', 'false');
}

menuBtn.addEventListener('click', openSidebar);
sidebarToggle.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

/* ── Tabs del gráfico ── */
document.querySelectorAll('.chart-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.chart-tab').forEach(t => {
            t.classList.remove('chart-tab--active');
            t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('chart-tab--active');
        tab.setAttribute('aria-selected', 'true');
    });
});

/* ── Navegación por teclado en la sidebar ── */
document.querySelectorAll('.sidebar__link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.sidebar__item').forEach(i => i.classList.remove('sidebar__item--active'));
        link.closest('.sidebar__item').classList.add('sidebar__item--active');
    });
});

