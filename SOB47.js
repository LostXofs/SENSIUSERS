
h5gg.require(5.9);
  
  function setSpeedX8() {
    h5gg.editAll('4366458311853685297', 'I64');
  }

  function disableSpeedX8() {
    h5gg.editAll('4397530849764387586', 'I64');
  }

  function searchSpeedX8() {
    h5gg.clearResults();
    h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
  }
  function toggleSpeedX8() {
    if (button.classList.contains("active")) {
      disableSpeedX8();
    } else {
      if (h5gg.getResultsCount() != 1) {
;
  }
        searchSpeedX8();
      }
      setSpeedX8();
    }
    button.classList.toggle('active');

    vant.showNotify({
    type: 'success',
    message: 'Speed X8 Activado'
  })
