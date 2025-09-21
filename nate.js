function update() {
    //RADAR
          {
            const value1 = document.querySelector("textarea.radar1").value = `My radar unit passed an internal systems check at the beginning of my shift, and I perform a check after each traffic stop.

I observed a vehicle near ${locate.value} traveling ${direction.value}${observed.value}mph, confirming a speed of ${confirmed.value}mph in a ${zone.value}mph zone with my ${ms.value}, ${fr.value}, ${os.value} radar.`;
            const value2 = document.querySelector("textarea.radar2").value = `
Additionally, the vehicle was locked on radar at ${confirmed.value}mph`;
            const value3 = document.querySelector("textarea.radar3").value = `
When asked if the driver was aware of their speed and the speed limit, they stated they ${aspeed.value} of their speed, and ${alimit.value} of the speed limit.`;
            const value4 = document.querySelector("textarea.radar4").value = `
I decided to issue a ${cw.value} for driving ${charged.value}mph in a ${zone.value}mph zone.`;

            document.querySelector("textarea.radar1").value = value1;//checked calibration and all speed values
            document.querySelector("textarea.radar2").value = value2;//locked-confirmed values
            document.querySelector("textarea.radar3").value = value3;//aware-not aware
            document.querySelector("textarea.radar4").value = value4;//citation-warning
        
            const showSecond = document.querySelector("input.showSecond").checked;
            const showThird = document.querySelector("input.showThird").checked;
            const showFourth = document.querySelector("input.showFourth").checked;
            let combinedValue = value1;

            if (showSecond) {
                combinedValue += "\n" + value2;
                if (showThird) {
                combinedValue += ` with a moving patrol vehicle speed of ${patrolSpeed.value}mph.`;
            }
            }

            if (showFourth) {
                combinedValue += "\n" + value3;
            }
            combinedValue += "\n" + value4;
        
            document.querySelector("textarea.radar").value = combinedValue;
          }


    //LIDAR
          {
            const value1 = document.querySelector("textarea.lidar1").value = `The LiDAR passed an internal systems check when it powered on.

While sitting stationary, I observed a vehicle near ${locate.value} traveling ${direction.value}${observed.value}mph, in the ${os.value} relative to my position, confirming and locking a speed of ${confirmed.value}mph in a ${zone.value}mph zone with my LiDAR.`;
            const value2 = document.querySelector("textarea.lidar2").value = `
When asked if the driver was aware of their speed and the speed limit, they stated they ${aspeed.value} of their speed, and ${alimit.value} of the speed limit.`;
            const value3 = document.querySelector("textarea.lidar3").value = `
I decided to issue a ${cw.value} for driving ${charged.value}mph in a ${zone.value}mph zone.`;

            document.querySelector("textarea.lidar1").value = value1;//passed internal check and all speed values
            document.querySelector("textarea.lidar2").value = value2;//aware-not aware
            document.querySelector("textarea.lidar3").value = value3;//citation-warning
        
            const showFourth = document.querySelector("input.showFourth").checked;
            let combinedValue = value1;

            if (showFourth) {
                combinedValue += "\n" + value2;
            }

            combinedValue += "\n" + value3;
        
            document.querySelector("textarea.lidar").value = combinedValue;

          }
}