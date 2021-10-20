#include <iostream>

using namespace std;


int main() {
  int R, C;
  cin >> R >> C;
  int matrix[R][C];
  for (int i = 0; i < R; i++) {
    for (int j = 0; j < C; j++) {
      cin >> matrix[i][j];
    }
  }

  int max = matrix[0][0];
  for (int r0 = 0; r0 < R; r0++) {
    for (int c0 = 0; c0 < C; c0++) {
      for (int r1 = r0; r1 < R; r1++) {
        for (int c1 = c0; c1 < C; c1++) {
          int sum = 0;
          for (int r = r0; r <= r1; r++) {
            for (int c = c0; c <= c1; c++ ) {
              sum += matrix[r][c];
            }
          }
          if (sum > max)
            max = sum;
        }
      }
    }
  }
  cout << max << endl;
  return 0;
}