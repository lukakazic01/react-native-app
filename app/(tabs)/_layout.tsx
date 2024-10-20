import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{title: "Home" }} />
            <Tabs.Screen name="prikaz-1" options={{title: "Prikaz 1"}} />
            <Tabs.Screen name="prikaz-2" options={{title: "Prikaz 2"}} />
            <Tabs.Screen name="prikaz-3" options={{title: "Prikaz 3"}} />
            <Tabs.Screen name="prikaz-4" options={{title: "Prikaz 4"}} />
            <Tabs.Screen name="prikaz-5" options={{title: "Prikaz 5"}} />
        </Tabs>
    );
}