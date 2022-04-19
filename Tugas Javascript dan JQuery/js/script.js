/**
 @author Angga Aditya Putra Pratama / 1402020008
 Desain Dan Pemrograman Web kelas A
*/

/**
  --- Memastikan file sudah diload dengan sempurna ---
*/
$(document).ready(function() {
    // --- Event ---
    $("#pulsa").click(function() {
        $("#nominalPulsa").show();
        $(".btnPulsa").show();
        $("#nominalPaketData").hide();
        $(".btnPaketData").hide();
        // -- Selection ---
        $("#pulsa").css("border-bottom", "2px solid #03ac0e");
        $("#pulsa").css("color", "#03ac0e");
        $("#paketData").css("color", "black");
        $("#paketData").css("border-bottom", "2px solid transparent");
    });

    // --- Event ---
    $("#paketData").click(function() {
        $("#nominalPulsa").hide();
        $(".btnPulsa").hide();
        $("#nominalPaketData").prop("hidden", false);
        $("#nominalPaketData").show();
        $(".btnPaketData").prop("hidden", false);
        $(".btnPaketData").show();
        // -- Selection ---
        $("#paketData").css("border-bottom", "2px solid #03ac0e");
        $("#paketData").css("color", "#03ac0e");
        $("#pulsa").css("color", "black");
        $("#pulsa").css("border-bottom", "2px solid transparent");
    });

    // --- Event ---
    $("#nominalPulsa").change(function() {
    // -- Selection ---
        $(".btnPulsa").css({
            "color"            : "white",
            "background-color" : "#FD5F19"
        });
        $(".btnPulsa").prop("disabled", false);
    });

    // --- Event ---
    $("#nominalPaketData").change(function() {
    // -- Selection --- 
        $(".btnPaketData").css({
            "color"            : "white",
            "background-color" : "#FD5F19"
        });
        $(".btnPaketData").prop("disabled", false);
    });

    // --- Event ---
    $("#nomorTelepon").change(function() {
    // --- Selection ---
        if ($("#nomorTelepon").val() > 0) {
            $("#nominalPulsa").prop("disabled", false);
            $("#nominalPaketData").prop("disabled", false);

            // --- Pulsa ---
            // --- Harga Pulsa ---
            var pulsa1 = 2;
            var pulsa2 = 3;
            $(".btnPulsa").click(function () {
                var hargaPulsa = parseInt($("#nominalPulsa").val());
                let konfirmPulsa = confirm("Pembelian pulsa sebesar " + hargaPulsa + ".000 ke nomor " + $("#nomorTelepon").val());
                if (hargaPulsa >= 10) {
                    hargaPulsa += pulsa1;
                }else if (hargaPulsa <= 10) {
                    hargaPulsa += pulsa2; 
                }else{

                }

                if (konfirmPulsa != false) {
                    alert("Total harga pulsa Rp. " + hargaPulsa + ".000,- ke nomor " + $("#nomorTelepon").val()
                    + " sedang di proses. Terima Kasih :)");                   
                }else{

                }
            });

            // --- Paket Data ---
            // --- Harga Paket Data ---
            var Internet10GB = "30.500";
            var Internet15GB = "43.000";
            var ICUkuotaMalam  = "20.000";
            var ICUbiasa = "70.000";
            $(".btnPaketData").click(function () {
                var hargaPaketData = $("#nominalPaketData").val();
                let konfirmPaketData = confirm("Pembelian paket data " + hargaPaketData + " ke nomor " + $("#nomorTelepon").val());
                if (hargaPaketData === "Internet 10 GB - Rp30.500") {
                    hargaPaketData = Internet10GB;
                }else if (hargaPaketData === "Internet 15 GB - Rp43.000") {
                    hargaPaketData = Internet15GB;
                }else if (hargaPaketData === "Internet Combo Unlimited (Kuota Malam) - Rp20.000") {
                    hargaPaketData = ICUkuotaMalam;
                }else if (hargaPaketData === "Internet Combo Unlimited - Rp70.000") {
                    hargaPaketData = ICUbiasa;
                }else{
                    
                }

                if (konfirmPaketData != false) {
                    alert("Total harga paket data Rp. " + hargaPaketData + ",- ke nomor " + $("#nomorTelepon").val()
                    + " sedang di proses. Terima Kasih :)");                   
                }else{

                }
            });
        }else{
            
        }
    });
});