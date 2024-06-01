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
                'rgba(139, 0, 0, 1)',    // Dark red
                'rgba(0, 0, 139, 1)',    // Dark blue
                'rgba(139, 139, 0, 1)',  // Dark yellow
                'rgba(0, 139, 139, 1)',  // Dark cyan
                'rgba(75, 0, 130, 1)',   // Dark purple
                'rgba(139, 69, 19, 1)',  // Dark orange/brown
                'rgba(85, 107, 47, 1)',  // Dark olive green
                'rgba(47, 79, 79, 1)',   // Dark slate gray
                'rgba(72, 61, 139, 1)',  // Dark slate blue
                'rgba(0, 100, 0, 1)',    // Dark green
                'rgba(25, 25, 112, 1)',  // Midnight blue
                'rgba(139, 0, 139, 1)',  // Dark magenta
                'rgba(128, 0, 0, 1)',    // Maroon
                'rgba(0, 128, 128, 1)',  // Teal
                'rgba(34, 139, 34, 1)',  // Forest green
                'rgba(0, 139, 0, 1)',    // Dark green
                'rgba(100, 149, 237, 1)',// Cornflower blue
                'rgba(75, 0, 130, 1)',   // Indigo
                'rgba(139, 0, 0, 1)',    // Dark red
                'rgba(0, 0, 139, 1)',    // Dark blue
                'rgba(128, 0, 128, 1)',  // Purple
                'rgba(210, 105, 30, 1)', // Chocolate
                'rgba(112, 128, 144, 1)' // Slate gray
            ],
            borderColor: [
                'rgba(139, 0, 0, 1)',    // Dark red
                'rgba(0, 0, 139, 1)',    // Dark blue
                'rgba(139, 139, 0, 1)',  // Dark yellow
                'rgba(0, 139, 139, 1)',  // Dark cyan
                'rgba(75, 0, 130, 1)',   // Dark purple
                'rgba(139, 69, 19, 1)',  // Dark orange/brown
                'rgba(85, 107, 47, 1)',  // Dark olive green
                'rgba(47, 79, 79, 1)',   // Dark slate gray
                'rgba(72, 61, 139, 1)',  // Dark slate blue
                'rgba(0, 100, 0, 1)',    // Dark green
                'rgba(25, 25, 112, 1)',  // Midnight blue
                'rgba(139, 0, 139, 1)',  // Dark magenta
                'rgba(128, 0, 0, 1)',    // Maroon
                'rgba(0, 128, 128, 1)',  // Teal
                'rgba(34, 139, 34, 1)',  // Forest green
                'rgba(0, 139, 0, 1)',    // Dark green
                'rgba(100, 149, 237, 1)',// Cornflower blue
                'rgba(75, 0, 130, 1)',   // Indigo
                'rgba(139, 0, 0, 1)',    // Dark red
                'rgba(0, 0, 139, 1)',    // Dark blue
                'rgba(128, 0, 128, 1)',  // Purple
                'rgba(210, 105, 30, 1)', // Chocolate
                'rgba(112, 128, 144, 1)' // Slate gray
            ]       
            ,
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
