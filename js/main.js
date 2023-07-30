    function convertLength() {
    const lengthInput = document.getElementById('length');
    const unitSelect = document.getElementById('unit');
    const resultOutput = document.getElementById('result');

    const length = parseFloat(lengthInput.value);
    const unit = unitSelect.value;

    if (isNaN(length)) {
      resultOutput.textContent = 'Please enter a valid number for length.';
      return;
    } 
    
    switch (unit) {
      case 'millimeter':
        resultOutput.textContent = `Converted Length: ${length} millimeters`;
        break;
      case 'centimeter':
        resultOutput.textContent = `Converted Length: ${length / 10} centimeters`;
        break;
      case 'meter':
        resultOutput.textContent = `Converted Length: ${length / 1000} meters`;
        break;
      case 'kilometer':
        resultOutput.textContent = `Converted Length: ${length / 1000000} kilometers`;
        break;
      default:
        resultOutput.textContent = 'Invalid unit selected.';
        break;
    }
  }