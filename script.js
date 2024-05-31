document.getElementById('addInput').addEventListener('click', () => {
    const inputContainer = document.getElementById('inputContainer');
    const newInputGroup = document.createElement('div');
    newInputGroup.classList.add('inputGroup');
    newInputGroup.innerHTML = `
        <label>Label:</label>
        <input type="text" class="labelInput"><br>
        <label>Data:</label>
        <input type="number" class="dataInput"><br>
    `;
    inputContainer.appendChild(newInputGroup);
});

document.getElementById('createChart').addEventListener('click', createChart);

console.log('Chart.js version:', Chart.version); // Check if Chart.js is loaded

function createChart() {
    const labelInputs = document.querySelectorAll('.labelInput');
    const dataInputs = document.querySelectorAll('.dataInput');
    const chartType = document.getElementById('chartType').value;

    const labels = Array.from(labelInputs).map(input => input.value);
    const data = Array.from(dataInputs).map(input => Number(input.value));

    if (labels.length === 0 || data.length === 0) {
        alert("Please add at least one label and data point.");
        return;
    }

    // Remove any existing chart
    const existingChart = Chart.getChart('myChart');
    if (existingChart) {
        existingChart.destroy();
    }

    // Get the context of the canvas element
    const ctx = document.getElementById('myChart').getContext('2d');

    // Define the data for the chart
    const chartData = {
        labels: labels,
        datasets: [{
            label: 'User Data',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Define the options for the chart
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Create a new Chart object
    new Chart(ctx, {
        type: chartType,
        data: chartData,
        options: options
    });
}
