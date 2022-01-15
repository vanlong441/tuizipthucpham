<script>
  import { onMount } from "svelte";

  onMount(() => {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v9.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
</script>

<div id="fb-root" />
<div
  class="fb-customerchat"
  attribution="setup_tool"
  page_id="103565947916857"
  logged_in_greeting="Hi bạn, Túi zip thực phẩm MIS có thể hỗ trợ gì cho bạn ạ? "
  logged_out_greeting="Hi bạn, Túi zip thực phẩm MIS có thể hỗ trợ gì cho bạn ạ? "
/>
