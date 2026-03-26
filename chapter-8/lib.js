window.Module = window.Module ||
  (function () {
    console.log(" lib loaded");
    function api() {
      console.log("api called");
    }
    return { api };
  })();
