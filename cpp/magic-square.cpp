#include <iostream>
#include <vector>

using namespace std;

int main () {
  int N;
  cin >> N;

  vector<vector<int> > matriz(N, vector<int>(N));
  int verticalResults[N];
  int horizontalResults[N];
  int diagonalResults[2] = {0, 0};

  for (int i = 0; i < N; i++) {
    for (int j = 0; j < N; j++) {
      cin >> matriz[i][j];
    }
  }

  //vertical-horizontal check
  int verticalSum, horizontalSum;
  for (int i = 0; i < N; i++) {
    verticalSum = 0;
    horizontalSum = 0;
    for (int j = 0; j < N; j++) {
      horizontalSum += matriz[i][j];
      verticalSum += matriz[j][i];
    }
    verticalResults[i] = verticalSum;
    horizontalResults[i] = horizontalSum;
  }

  // diagonal check
  for (int i = 0, j = N-1; i < N; i++, j--) {
    diagonalResults[0] += matriz[i][i];
    diagonalResults[1] += matriz[i][j];
  }

  bool isMagic = true;
  int aux = horizontalResults[0];
  for (int i = 0; i < N; i++) {
    isMagic = isMagic && horizontalResults[i] == aux;
    isMagic = isMagic && verticalResults[i] == aux;
  }
  isMagic = isMagic && diagonalResults[0] == aux;
  isMagic = isMagic && diagonalResults[1] == aux;

  if (isMagic) {
    cout << "Yes" << endl;
  } else {
    cout << "No" << endl;
  }
  return 0;
}