#include <iostream>

using namespace std;


int main() {
  int R, C;
  cin >> R >> C;
  int matrix[R][C];
  for (int i = 0; i < R; i++) {
    for (int j = 0; j < C; j++) {
      cin >> matrix[i][j];
      if (i >= 1) matrix[i][j] += matrix[i-1][j];
      if (j >= 1) matrix[i][j] += matrix[i][j-1];
      if (i >= 1 && j >= 1) matrix[i][j] -= matrix[i-1][j-1];
    }
  }

  int max = matrix[0][0];
  for (int r0 = 0; r0 < R; r0++) {
    for (int c0 = 0; c0 < C; c0++) {
      for (int r1 = r0; r1 < R; r1++) {
        for (int c1 = c0; c1 < C; c1++) {
          int sum = matrix[r1][c1];
          if (r0 >= 1) sum -= matrix[r0-1][c1];
          if (c0 >= 1) sum -= matrix[r1][c0 -1];
          if (r0 >= 1 && c0 >= 1) sum += matrix[r0-1][c0-1];

          if (sum > max)
            max = sum;
        }
      }
    }
  }
  cout << max << endl;
  return 0;
}