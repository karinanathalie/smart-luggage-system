import numpy as np
import matplotlib.pyplot as plt
import math
from matplotlib.ticker import PercentFormatter

#input data, please change based on the flight situation
plane_type = "Boeing 777-300"
flight_code = "CX542"
max_belly_capacity = 18
expected_passengers = 368
passenger_type=["First class", "Business class", "Premium Economy", "Economy"] 
type_capacity = [0,40,32,296]

# Load data from CSV file
array = np.genfromtxt('Baggage.csv',delimiter=',', skip_header=1, skip_footer=1, dtype=str)

# Extract weights from the data
weight = np.array([float(i[0]) for i in array])
average = np.average(weight)
std = np.std(weight)

# Number of simulations
simu = 1000000

# Initialise an array to store simulated weights
weights = np.zeros(simu)

# Simulate expected_passengers weights and store them in the weights array
for i in range(simu):
    random_weights = np.random.normal(loc = average, scale = std, size =expected_passengers )
    weights[i]=round(sum(random_weights),3)

# Calculate histogram values and bin edges
hist_values, bin_edges = np.histogram(weights, bins=40, density=True)
max_density_index = np.argmax(hist_values)
max_density_value = (bin_edges[max_density_index] + bin_edges[max_density_index + 1]) / 2
print(f"The value with the highest density is: {max_density_value}")

# Calculate midpoints of bin edges
midedges = np.zeros(len(bin_edges))
for i in range (len(bin_edges)):
    midedges[i]= bin_edges[i]+(bin_edges[1]-bin_edges[0])/2

# Create a figure and axis for the plot
fig = plt.figure(figsize=(8, 5))
fig.patch.set_facecolor('#1a1b1b')
fig.set_facecolor('#1a1b1b')
ax = plt.axes()
ax.set_facecolor('#1a1b1b')

# Plot histogram and customize the appearance
plt.title(f'Prediction of Total Baggage with {expected_passengers} Passengers ({simu} simulations)'+'\n'+f'Flight Code : {flight_code}, Plane Type : {plane_type}').set_color('#F8F8F8')
plt.xlabel('Total Weight/Flight Simulation').set_color('#F8F8F8')
plt.ylabel('Percentage Density').set_color('#F8F8F8')

# Set spines color and tick params
ax.spines['bottom'].set_color('#F8F8F8')
ax.spines['top'].set_color('#F8F8F8')
ax.spines['right'].set_color('#F8F8F8')
ax.spines['left'].set_color('#F8F8F8')
ax.tick_params(axis='x', colors='#F8F8F8')
ax.tick_params(axis='y', colors='#F8F8F8')

#turn on the grid as needed
# plt.grid(True)


# Plot histogram, density line, and highest density point
plt.hist(weights, bins=40, density=True, color='white',ec='#F8F8F8', alpha=0.7)
plt.plot(midedges[:-1],hist_values, color = '#fcdc0e',lw=2)
plt.scatter(midedges[:-1],hist_values, color = 'r')
plt.axvline(max_density_value)
ax.yaxis.set_major_formatter(PercentFormatter(xmax=0.01))

# Calculate total passengers' luggage weight and display information
passenger_luggage= (max_density_value/1000)
plt.figtext(0.97, 0.75, f"Total Passengers' Luggages"+"\n Weight Prediction :"+ f" {passenger_luggage:.2f} tonnes" + "\n"+f"Excess Belly Capacity : {(max_belly_capacity-passenger_luggage):.2f} tonnes", va="center", ha="right", fontsize=9, bbox={"facecolor":"orange","pad":5})

# Show the plots
plt.show()