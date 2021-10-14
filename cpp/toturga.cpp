#include <iostream>

using namespace std;

int main(){
  int N, X, Y;
  cin >> N >> X >> Y;
  int index = X;
  int clockwiseCont = 0;
  bool hasArrived = false;

  while (!hasArrived) {
    index++;
    clockwiseCont++;
    if (index == N) index = 0;
    if (index == Y) hasArrived = true;
  }

  int anticlockwiseCont = 0;
  index = X;
  hasArrived = false;
  while (!hasArrived) {
    index--;
    anticlockwiseCont++;
    if (index == -1) index = 6;
    if (index == Y) hasArrived = true;
  }

  if (clockwiseCont < anticlockwiseCont) {
    cout << clockwiseCont << endl;
  } else {
    cout << anticlockwiseCont << endl;
  }
}