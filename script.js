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

function createChart() {
    const labelInputs = document.querySelectorAll('.labelInput');
    const dataInputs = document.querySelectorAll('.dataInput');

    const labels = Array.from(labelInputs).map(input => input.value);
    const data = Array.from(dataInputs).map(input => Number(input.value));

    // Remove any existing chart
    const existingChart = Chart.getChart('myChart');
    if (existingChart) {
        existingChart.destroy();
    }

    // Get the context of the canvas element
    const ctx = document.getElementById('myChart').getContext('2d');

    // Define the data for the bar chart
    const chartData = {
        labels: labels,
        datasets: [{
            label: 'User Data',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    // Define the options for the bar chart
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Create a new Chart object
    new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: options
    });
}
