webpackJsonp([5],{252:function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(253);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz9kODVhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEiLCJmaWxlIjoiMjUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL2Jsb2dTY3JvbGxcIjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9ibG9nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///252\n")},253:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar blog = document.querySelector(".blog");\nvar btn = document.querySelector(".sidebar-mobile__btn");\nvar sidebar = document.querySelector(".blog__sidebar");\nvar sidebarList = document.querySelector(".sidebar__list");\nvar links = document.querySelectorAll(".sidebar__link");\nvar articles = document.querySelector(".blog__articles");\nvar blogTop = blog.getBoundingClientRect().top + window.pageYOffset;\n\nwindow.addEventListener("scroll", function (e) {\n  if (window.pageYOffset > blogTop) {\n    sidebarList.classList.add("sidebar__list--active");\n    btn.style.width = "70px";\n  } else if (sidebarList.classList.contains("sidebar__list--active") && window.pageYOffset < blogTop) {\n    btn.style.width = "0px";\n    sidebarList.classList.remove("sidebar__list--active");\n  }\n});\n\nbtn.addEventListener("click", function () {\n  btn.classList.toggle("sidebar-mobile__btn--active");\n  sidebar.classList.toggle("blog__sidebar--active");\n});\n\nlinks.forEach(function (link) {\n  link.addEventListener("click", function () {\n    btn.classList.remove("sidebar-mobile__btn--active");\n    sidebar.classList.remove("blog__sidebar--active");\n  });\n});\n\nvar lastId,\n    topMenu = $(".sidebar__nav"),\n    topMenuHeight = topMenu.outerHeight() - 285,\n    menuItems = topMenu.find("a"),\n    scrollItems = menuItems.map(function () {\n  var item = $($(this).attr("href"));\n  if (item.length) {\n    return item;\n  }\n});\n\nmenuItems.click(function (e) {\n  var href = $(this).attr("href"),\n      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;\n  $("html, body").stop().animate({\n    scrollTop: offsetTop\n  }, 300);\n  e.preventDefault();\n});\n\n$(window).scroll(function () {\n  var fromTop = $(this).scrollTop() + topMenuHeight;\n  var cur = scrollItems.map(function () {\n    if ($(this).offset().top < fromTop) return this;\n  });\n  cur = cur[cur.length - 1];\n  var id = cur && cur.length ? cur[0].id : "";\n\n  if (lastId !== id) {\n    lastId = id;\n    menuItems.parent().removeClass("sidebar__item--active").end().filter("[href=\'#" + id + "\']").parent().addClass("sidebar__item--active");\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibG9nU2Nyb2xsLmpzP2U3ZGEiXSwibmFtZXMiOlsiYmxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ0biIsInNpZGViYXIiLCJzaWRlYmFyTGlzdCIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImFydGljbGVzIiwiYmxvZ1RvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsIndpZHRoIiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0b2dnbGUiLCJmb3JFYWNoIiwibGluayIsImxhc3RJZCIsInRvcE1lbnUiLCIkIiwidG9wTWVudUhlaWdodCIsIm91dGVySGVpZ2h0IiwibWVudUl0ZW1zIiwiZmluZCIsInNjcm9sbEl0ZW1zIiwibWFwIiwiaXRlbSIsImF0dHIiLCJsZW5ndGgiLCJjbGljayIsImhyZWYiLCJvZmZzZXRUb3AiLCJvZmZzZXQiLCJzdG9wIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwiZnJvbVRvcCIsImN1ciIsImlkIiwicGFyZW50IiwicmVtb3ZlQ2xhc3MiLCJlbmQiLCJmaWx0ZXIiLCJhZGRDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxPQUFPQyxTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxJQUFNQyxNQUFNRixTQUFTQyxhQUFULENBQXVCLHNCQUF2QixDQUFaO0FBQ0EsSUFBTUUsVUFBVUgsU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBaEI7QUFDQSxJQUFNRyxjQUFjSixTQUFTQyxhQUFULENBQXVCLGdCQUF2QixDQUFwQjtBQUNBLElBQU1JLFFBQVFMLFNBQVNNLGdCQUFULENBQTBCLGdCQUExQixDQUFkO0FBQ0EsSUFBTUMsV0FB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QUNHbUIsTUFESCxHQUVHQyxXQUZILENBRWUsdUJBRmYsRUFHR0MsR0FISCxHQUlHQyxNQUpILENBSVUsYUFBYUosRUFBYixHQUFrQixJQUo1QixFQUtHQyxNQUxILEdBTUdJLFFBTkgsQ0FNWSx1QkFOWjtBQU9EO0FBQ0YsQ0FsQkQiLCJmaWxlIjoiMjUzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvZ1wiKTtcbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1tb2JpbGVfX2J0blwiKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2dfX3NpZGViYXJcIik7XG5jb25zdCBzaWRlYmFyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhcl9fbGlzdFwiKTtcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyX19saW5rXCIpO1xuY29uc3QgYXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2dfX2FydGljbGVzXCIpO1xuY29uc3QgYmxvZ1RvcCA9IGJsb2cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbihlKSB7XG4gIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBibG9nVG9wKSB7XG4gICAgc2lkZWJhckxpc3QuY2xhc3NMaXN0LmFkZChcInNpZGViYXJfX2xpc3QtLWFjdGl2ZVwiKTtcbiAgICBidG4uc3R5bGUud2lkdGggPSBcIjcwcHhcIjtcbiAgfSBlbHNlIGlmIChcbiAgICBzaWRlYmFyTGlzdC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlYmFyX19saXN0LS1hY3RpdmVcIikgJiZcbiAgICB3aW5kb3cucGFnZVlPZmZzZXQgPCBibG9nVG9wXG4gICkge1xuICAgIGJ0bi5zdHlsZS53aWR0aCA9IFwiMHB4XCI7XG4gICAgc2lkZWJhckxpc3QuY2xhc3NMaXN0LnJlbW92ZShcInNpZGViYXJfX2xpc3QtLWFjdGl2ZVwiKTtcbiAgfVxufSk7XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZWJhci1tb2JpbGVfX2J0bi0tYWN0aXZlXCIpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoXCJibG9nX19zaWRlYmFyLS1hY3RpdmVcIik7XG59KTtcblxubGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlYmFyLW1vYmlsZV9fYnRuLS1hY3RpdmVcIik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvZ19fc2lkZWJhci0tYWN0aXZlXCIpO1xuICB9KTtcbn0pO1xuXG52YXIgbGFzdElkLFxuICB0b3BNZW51ID0gJChcIi5zaWRlYmFyX19uYXZcIiksXG4gIHRvcE1lbnVIZWlnaHQgPSB0b3BNZW51Lm91dGVySGVpZ2h0KCkgLSAyODUsXG4gIG1lbnVJdGVtcyA9IHRvcE1lbnUuZmluZChcImFcIiksXG4gIHNjcm9sbEl0ZW1zID0gbWVudUl0ZW1zLm1hcChmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9ICQoJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSk7XG4gICAgaWYgKGl0ZW0ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gIH0pO1xuXG5tZW51SXRlbXMuY2xpY2soZnVuY3Rpb24oZSkge1xuICB2YXIgaHJlZiA9ICQodGhpcykuYXR0cihcImhyZWZcIiksXG4gICAgb2Zmc2V0VG9wID0gaHJlZiA9PT0gXCIjXCIgPyAwIDogJChocmVmKS5vZmZzZXQoKS50b3AgLSB0b3BNZW51SGVpZ2h0ICsgMTtcbiAgJChcImh0bWwsIGJvZHlcIilcbiAgICAuc3RvcCgpXG4gICAgLmFuaW1hdGUoXG4gICAgICB7XG4gICAgICAgIHNjcm9sbFRvcDogb2Zmc2V0VG9wXG4gICAgICB9LFxuICAgICAgMzAwXG4gICAgKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gIHZhciBmcm9tVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKSArIHRvcE1lbnVIZWlnaHQ7XG4gIHZhciBjdXIgPSBzY3JvbGxJdGVtcy5tYXAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQodGhpcykub2Zmc2V0KCkudG9wIDwgZnJvbVRvcCkgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBjdXIgPSBjdXJbY3VyLmxlbmd0aCAtIDFdO1xuICB2YXIgaWQgPSBjdXIgJiYgY3VyLmxlbmd0aCA/IGN1clswXS5pZCA6IFwiXCI7XG5cbiAgaWYgKGxhc3RJZCAhPT0gaWQpIHtcbiAgICBsYXN0SWQgPSBpZDtcbiAgICBtZW51SXRlbXNcbiAgICAgIC5wYXJlbnQoKVxuICAgICAgLnJlbW92ZUNsYXNzKFwic2lkZWJhcl9faXRlbS0tYWN0aXZlXCIpXG4gICAgICAuZW5kKClcbiAgICAgIC5maWx0ZXIoXCJbaHJlZj0nI1wiICsgaWQgKyBcIiddXCIpXG4gICAgICAucGFyZW50KClcbiAgICAgIC5hZGRDbGFzcyhcInNpZGViYXJfX2l0ZW0tLWFjdGl2ZVwiKTtcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibG9nU2Nyb2xsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///253\n')}},[252]);