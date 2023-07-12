import { generate_nft } from "./nft"

$(() => {
  $(".js_generate_event_nft").on("click", function () {
    $(".js_generate_event_nft").hide()
    generate_nft(GLOBAL_AUTH_USER.id, "js_event_dom", $(".js-span-token").html(), "event", "NFT event", "Generated by Bnic.io", null, false, {
      type: "event",
      event_id: $(".js_event_id").val(),
    })
  })
})


