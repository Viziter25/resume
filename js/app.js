window.addEventListener('DOMContentLoaded', () => { 


    const tabs = document.querySelectorAll('.btn');
    const tabsContent = document.querySelectorAll('.container');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTab() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('btn_active');
        });
    }

    function showTab(i = 0) {
        tabsContent[i].style.display = 'block';
        // tabsContent[i].classList.add('show', 'fade');
        // tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('btn_active');
    }

    hideTab();
    showTab();

    tabsParent.addEventListener('click', (event) =>{
        const target = event.target;

        if(target && target.classList.contains('btn')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTab();
                    showTab(i);
                }
            });
        }
    });
});