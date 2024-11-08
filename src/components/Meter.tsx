import { Dimensions, Image, Text, View } from "react-native";
import {
  LineChart,
} from "react-native-chart-kit";

export default function Meter() {
  return (
    <View className="bg-moonstone shadow-midnight_green shadow-lg rounded-3xl w-5/6 mx-auto flex p-10 ">
      <Text className="text-pale_azure mx-auto text-2xl font-semibold">
        You have spent:
      </Text>
      <Text className="text-cerulean mx-auto font-bold text-4xl my-2">
        123.456,23 COP
      </Text>
      <Text className="text-pale_azure ml-auto text-xl font-semibold">
        the equivalent of 43 m³
      </Text>
      <View className="my-4" />
      <Text className="text-pale_azure mx-auto text-2xl font-semibold">
        Compared to last month
      </Text>
      <LineChart
        data={{
          labels: ["Enero", "Febrero", "Marzo", "Abril"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width * 0.66}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="K"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#d9eaff",
          backgroundGradientFrom: "#1EB6C6",
          backgroundGradientTo: "#1EB6C6",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `#086680`,
          labelColor: (opacity = 1) => `#086680`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#1EB6C6",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
