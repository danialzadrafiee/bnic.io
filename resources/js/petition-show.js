import { generate_nft } from "./nft"

$(() => {
  $(".btn_generate_petition_nft").on("click", function () {
    $(".btn_generate_petition_nft").css('opacity',0)
    generate_nft(GLOBAL_AUTH_USER.id, "js_petition_dom", $(".js-span-token").html(), "petition", "NFT petition", "Generated by Bnic.io", null, false, {
      type: "petition",
      petition_id: $(".js_petition_id").val(),
    })
  })
})
