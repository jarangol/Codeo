#include <iostream>

using namespace std;

int main(){
  int N, C;
  cin >> N;
  int numbers[N];
  for (int i = 0; i < N; i++) {
    cin >> numbers[i];
  }
  cin >> C;
  while (C--) {
    int cont = 0, query;
    cin >> query;
    for (int i = 0; i < N; i++) {
        if (numbers[i] > query) { cont++; }
    }
    cout << cont << '\n';
  }
}