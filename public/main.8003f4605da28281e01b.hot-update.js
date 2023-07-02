"use strict";
self["webpackHotUpdateboilerplate_prismic"]("main",{

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Preloader */ "./app/components/Preloader.js");


class App {
  constructor() {
    this.createContent();
    this.createPreloader();
    this.addEventListeners();
    this.addLinkListeners();
    this.update();
  }
  createPreloader() {
    this.preloader = new components_Preloader__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
  createContent() {
    this.content = document.querySelector('.content');
    this.template = this.content.getAttribute('data-template');
  }

  /****
   * EVENTS
   * ***/
  onPopState() {
    this.onChange({
      url: window.location.pathname,
      push: false
    });
  }
  async onChange({
    url,
    push = true
  }) {
    await this.page.hide();
    const request = await window.fetch(url);
    if (request.status === 200) {
      const html = await request.text();
      const div = document.createElement('div');
      window.history.pushState({}, '', url);
      if (push) {
        window.history.pushState({}, '', url);
      }
      div.innerHTML = html;
      const divContent = div.querySelector('.content');
      this.template = divContent.getAttribute('data-template');
      this.navigation.onChange(this.template);
      this.content.setAttribute('data-template', this.template);
      this.content.innerHTML = divContent.innerHTML;
      this.canvas.onChangeEnd(this.template);
      this.page = this.pages[this.template];
      this.page.create();
      this.page.show();
      this.addLinkListeners();
    } else {
      console.log('Error');
    }
  }

  /****
   * LOOPS
   * ***/
  update() {
    if (this.page && this.page.update) {
      this.page.update();
    }
  }

  /****
   * LISTENERS
   * ***/
  addEventListeners() {}
  addLinkListeners() {
    const links = document.querySelectorAll('a');
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(links, link => {
      link.onclick = event => {
        event.preventDefault();
        const {
          href
        } = link;
        this.onChange({
          url: href
        });
      };
    });
  }
}
new App();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("43b8edfa9f87ca621065")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44MDAzZjQ2MDVkYTI4MjgxZTAxYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFYztBQUU1QyxNQUFNRSxHQUFHLENBQUM7RUFDUkMsV0FBV0EsQ0FBQSxFQUFJO0lBQ2IsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQztJQUVwQixJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDO0lBRXRCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztJQUN4QixJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUM7SUFFdkIsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQztFQUNmO0VBRUFILGVBQWVBLENBQUEsRUFBSTtJQUNqQixJQUFJLENBQUNJLFNBQVMsR0FBRyxJQUFJUiw0REFBUyxDQUFDLENBQUM7RUFDbEM7RUFFQUcsYUFBYUEsQ0FBQSxFQUFJO0lBQ2YsSUFBSSxDQUFDTSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUNqRCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJLENBQUNILE9BQU8sQ0FBQ0ksWUFBWSxDQUFDLGVBQWUsQ0FBQztFQUM1RDs7RUFFQTtBQUNGO0FBQ0E7RUFDRUMsVUFBVUEsQ0FBQSxFQUFJO0lBQ1osSUFBSSxDQUFDQyxRQUFRLENBQUM7TUFDWkMsR0FBRyxFQUFFQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUTtNQUM3QkMsSUFBSSxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxNQUFNTCxRQUFRQSxDQUFFO0lBQUVDLEdBQUc7SUFBRUksSUFBSSxHQUFHO0VBQUssQ0FBQyxFQUFFO0lBQ3BDLE1BQU0sSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBRXRCLE1BQU1DLE9BQU8sR0FBRyxNQUFNTixNQUFNLENBQUNPLEtBQUssQ0FBQ1IsR0FBRyxDQUFDO0lBQ3ZDLElBQUlPLE9BQU8sQ0FBQ0UsTUFBTSxLQUFLLEdBQUcsRUFBRTtNQUMxQixNQUFNQyxJQUFJLEdBQUcsTUFBTUgsT0FBTyxDQUFDSSxJQUFJLENBQUMsQ0FBQztNQUNqQyxNQUFNQyxHQUFHLEdBQUdsQixRQUFRLENBQUNtQixhQUFhLENBQUMsS0FBSyxDQUFDO01BRXpDWixNQUFNLENBQUNhLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRWYsR0FBRyxDQUFDO01BRXJDLElBQUlJLElBQUksRUFBRTtRQUNSSCxNQUFNLENBQUNhLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRWYsR0FBRyxDQUFDO01BQ3ZDO01BRUFZLEdBQUcsQ0FBQ0ksU0FBUyxHQUFHTixJQUFJO01BRXBCLE1BQU1PLFVBQVUsR0FBR0wsR0FBRyxDQUFDakIsYUFBYSxDQUFDLFVBQVUsQ0FBQztNQUVoRCxJQUFJLENBQUNDLFFBQVEsR0FBR3FCLFVBQVUsQ0FBQ3BCLFlBQVksQ0FBQyxlQUFlLENBQUM7TUFFeEQsSUFBSSxDQUFDcUIsVUFBVSxDQUFDbkIsUUFBUSxDQUFDLElBQUksQ0FBQ0gsUUFBUSxDQUFDO01BRXZDLElBQUksQ0FBQ0gsT0FBTyxDQUFDMEIsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUN2QixRQUFRLENBQUM7TUFDekQsSUFBSSxDQUFDSCxPQUFPLENBQUN1QixTQUFTLEdBQUdDLFVBQVUsQ0FBQ0QsU0FBUztNQUU3QyxJQUFJLENBQUNJLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ3pCLFFBQVEsQ0FBQztNQUV0QyxJQUFJLENBQUNTLElBQUksR0FBRyxJQUFJLENBQUNpQixLQUFLLENBQUMsSUFBSSxDQUFDMUIsUUFBUSxDQUFDO01BQ3JDLElBQUksQ0FBQ1MsSUFBSSxDQUFDa0IsTUFBTSxDQUFDLENBQUM7TUFFbEIsSUFBSSxDQUFDbEIsSUFBSSxDQUFDbUIsSUFBSSxDQUFDLENBQUM7TUFFaEIsSUFBSSxDQUFDbEMsZ0JBQWdCLENBQUMsQ0FBQztJQUN6QixDQUFDLE1BQU07TUFDTG1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUN0QjtFQUNGOztFQUVBO0FBQ0Y7QUFDQTtFQUNFbkMsTUFBTUEsQ0FBQSxFQUFJO0lBQ1IsSUFBSSxJQUFJLENBQUNjLElBQUksSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQ2QsTUFBTSxFQUFFO01BQ2pDLElBQUksQ0FBQ2MsSUFBSSxDQUFDZCxNQUFNLENBQUMsQ0FBQztJQUNwQjtFQUNGOztFQUVBO0FBQ0Y7QUFDQTtFQUNFRixpQkFBaUJBLENBQUEsRUFBSSxDQUNyQjtFQUVBQyxnQkFBZ0JBLENBQUEsRUFBSTtJQUNsQixNQUFNcUMsS0FBSyxHQUFHakMsUUFBUSxDQUFDa0MsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO0lBRTVDN0Msa0RBQUksQ0FBQzRDLEtBQUssRUFBRUUsSUFBSSxJQUFJO01BQ2xCQSxJQUFJLENBQUNDLE9BQU8sR0FBR0MsS0FBSyxJQUFJO1FBQ3RCQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBRXRCLE1BQU07VUFBRUM7UUFBSyxDQUFDLEdBQUdKLElBQUk7UUFFckIsSUFBSSxDQUFDOUIsUUFBUSxDQUFDO1VBQUVDLEdBQUcsRUFBRWlDO1FBQUssQ0FBQyxDQUFDO01BQzlCLENBQUM7SUFDSCxDQUFDLENBQUM7RUFDSjtBQUNGO0FBRUEsSUFBSWhELEdBQUcsQ0FBQyxDQUFDOzs7Ozs7OztVQ3ZHVCIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLXByaXNtaWMvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUtcHJpc21pYy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXHJcblxyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKVxyXG5cclxuICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcclxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXHJcblxyXG4gICAgdGhpcy51cGRhdGUoKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlUHJlbG9hZGVyICgpIHtcclxuICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb250ZW50ICgpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcclxuICB9XHJcblxyXG4gIC8qKioqXHJcbiAgICogRVZFTlRTXHJcbiAgICogKioqL1xyXG4gIG9uUG9wU3RhdGUgKCkge1xyXG4gICAgdGhpcy5vbkNoYW5nZSh7XHJcbiAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgICBwdXNoOiBmYWxzZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uQ2hhbmdlICh7IHVybCwgcHVzaCA9IHRydWUgfSkge1xyXG4gICAgYXdhaXQgdGhpcy5wYWdlLmhpZGUoKVxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxyXG4gICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlcXVlc3QudGV4dCgpXHJcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpXHJcblxyXG4gICAgICBpZiAocHVzaCkge1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHVybClcclxuICAgICAgfVxyXG5cclxuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWxcclxuXHJcbiAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG5cclxuICAgICAgdGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcclxuXHJcbiAgICAgIHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKVxyXG5cclxuICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsIHRoaXMudGVtcGxhdGUpXHJcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxyXG5cclxuICAgICAgdGhpcy5jYW52YXMub25DaGFuZ2VFbmQodGhpcy50ZW1wbGF0ZSlcclxuXHJcbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cclxuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXHJcblxyXG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpXHJcblxyXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ0Vycm9yJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqXHJcbiAgICogTE9PUFNcclxuICAgKiAqKiovXHJcbiAgdXBkYXRlICgpIHtcclxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xyXG4gICAgICB0aGlzLnBhZ2UudXBkYXRlKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqXHJcbiAgICogTElTVEVORVJTXHJcbiAgICogKioqL1xyXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcclxuICB9XHJcblxyXG4gIGFkZExpbmtMaXN0ZW5lcnMgKCkge1xyXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcclxuXHJcbiAgICBlYWNoKGxpbmtzLCBsaW5rID0+IHtcclxuICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rXHJcblxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UoeyB1cmw6IGhyZWYgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbm5ldyBBcHAoKVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0M2I4ZWRmYTlmODdjYTYyMTA2NVwiKSJdLCJuYW1lcyI6WyJlYWNoIiwiUHJlbG9hZGVyIiwiQXBwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUHJlbG9hZGVyIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRMaW5rTGlzdGVuZXJzIiwidXBkYXRlIiwicHJlbG9hZGVyIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwib25Qb3BTdGF0ZSIsIm9uQ2hhbmdlIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInB1c2giLCJwYWdlIiwiaGlkZSIsInJlcXVlc3QiLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50IiwibmF2aWdhdGlvbiIsInNldEF0dHJpYnV0ZSIsImNhbnZhcyIsIm9uQ2hhbmdlRW5kIiwicGFnZXMiLCJjcmVhdGUiLCJzaG93IiwiY29uc29sZSIsImxvZyIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9