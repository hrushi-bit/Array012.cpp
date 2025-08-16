#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter n: ";
    cin >> n;

    int arr[n-1];  
     // since one number is missing
    
    
    
    cout << "Enter " << n-1 << " numbers: ";
    for (int i = 0; i < n-1; i++) {
        cin >> arr[i];
    }
    

    // Formula sum of 1 to n
    int totalSum = n * (n + 1) / 2;
    
    

    // Sum of array
    int arrSum = 0;
    for (int i = 0; i < n-1; i++) {
        arrSum += arr[i];
    }

    cout << "Missing number: " << totalSum - arrSum << endl;

    return 0;
}