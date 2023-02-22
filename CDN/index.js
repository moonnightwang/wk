(function () {
    function io_accordion(hook) {
      hook.doneEach(function () {
        const allListItems = document.querySelectorAll("li");
        let indexAccordionItemIndex = 0;
  
        allListItems.forEach(function (el, index) {
          if (el.firstChild.textContent.endsWith(" +")) {
            const wrapper = document.createElement('div')
            const element = allListItems[index];
  
            wrapper.setAttribute('id', `accordion-content--${indexAccordionItemIndex}`)
            wrapper.classList.add('accordion-content-container')
  
            Object.values(el.children).forEach(function (childElement, childIndex) {
              if (childElement.innerText.startsWith('!>')) {
                childElement.innerText = childElement.innerText.replace('!>', '')
                childElement.classList.add('tip')
              }
  
              if (childIndex > 0) {
                wrapper.appendChild(childElement)
              }
            })
  
            el.appendChild(wrapper)
  
            element.parentElement.classList.add('accordion-wrapper')
            element.classList.add("accordion");
            element.firstChild.addEventListener('click', function (e) {
  
              if (e.target.parentElement.classList.contains('active')) {
                e.target.parentElement.classList.remove('active')
              } else {
                document.querySelectorAll("li").forEach(function (_el) {
                  if (_el.classList.contains("accordion")) {
                    _el.classList.remove("active");
                  }
                });
                e.target.parentElement.classList.add('active')
              }
            })
  
            if (indexAccordionItemIndex === 0) {
              element.classList.add("active");
            }
  
            element.firstChild.textContent = element.firstChild.textContent.substring(0, element.firstChild.textContent.length - 2);
            indexAccordionItemIndex++;
          }
        });
      });
    }
  
    window.$docsify.plugins = [].concat(io_accordion, $docsify.plugins)
  }());
  