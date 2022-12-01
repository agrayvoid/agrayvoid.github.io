function translate() {
    var plain, tqMapped, tqPlain, tqRandomMapped, tqRandomPlain, tqed;
    var txtName = document.getElementById("txtName");
    var txtOutput = document.getElementById("txtOutput");
    var plaintext = txtName.value
    tqPlain = ["A", "B", "C", "H", "E", "G", "I", "O", "P", "R", "T", "U", "FOR"];
    tqMapped = ["4", "8", "K", "#", "3", "6", "1", "0", "9", "2", "7", "V", "4"];
    tqRandomPlain = ["S"];
    tqRandomMapped = [["5", "Z"]];
    plain = plaintext.toString().upper();
    tqed = plain;
  
    for (var x = 0, _pj_a = tqPlain.length; x < _pj_a; x += 1) {
      tqed = tqed.replace(tqPlain[x], tqMapped[x]);
    }
  
    for (var y = 0, _pj_a = tqRandomPlain.length; y < _pj_a; y += 1) {
      for (var n = 0, _pj_b = tqed.length; n < _pj_b; n += 1) {
        if (tqed[n] === tqRandomPlain[y]) {
          tqed = tqed.slice(0, n) + random.choice(tqRandomMapped[y]) + tqed.slice(n + 1, tqed.length);
        }
      }
    }
    txtOutput.value = tqed + " [ " + plain + " ]"
  }