// 문제 설명
// 이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.

// 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
// 배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
// 두 정수 배열 arr1과 arr2가 주어질 때,
// 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1,
// arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ arr1의 길이 ≤ 100
// 1 ≤ arr2의 길이 ≤ 100
// 1 ≤ arr1의 원소 ≤ 100
// 1 ≤ arr2의 원소 ≤ 100
// 문제에서 정의한 배열의 대소관계가 일반적인 프로그래밍 언어에서 정의된 배열의 대소관계와 다를 수 있는 점에 유의해주세요.
// 입출력 예
// arr1	arr2	result
// [49, 13]	[70, 11, 2]	-1
// [100, 17, 84, 1]	[55, 12, 65, 36]	1
// [1, 2, 3, 4, 5]	[3, 3, 3, 3, 3]	0
// 입출력 예 설명
// 입출력 예 #1

// 예제 1번에서는 arr1의 길이는 2이고 arr2의 길이는 3으로 arr2의 길이가 더 깁니다. 따라서 arr2가 arr1보다 크므로 -1을 return 합니다.
// 입출력 예 #2

// 예제 2번에서는 arr1의 길이과 arr2의 길이가 4로 같습니다. arr1의 모든 원소의 합은 100 + 17 + 84 + 1 = 202이고
// arr2의 모든 원소의 합은 55 + 12 + 65 + 36 = 168으로 arr1의 모든 원소의 합이 더 큽니다. 따라서 arr1이 arr2보다 크므로 1을 return 합니다.
// 입출력 예 #3

// 예제 3번에서는 arr1의 길이와 arr2의 길이가 5로 같고 각 배열의 모든 원소의 합 또한 15로 같습니다. 따라서 arr1과 arr2가 같으므로 0을 return 합니다.

// 주어진 함수
class Solution {
    public int solution(int[] arr1, int[] arr2) {
        int answer = 0;
        return answer;
    }
}

// 풀이
class Solution {
    public int solution(int[] arr1, int[] arr2) {
        // 배열의 길이를 비교
        if (arr1.length > arr2.length) {
            return 1;
        } else if (arr1.length < arr2.length) {
            return -1;
        }

        // 배열의 길이가 같을 경우, 원소의 합을 비교
        int sum1 = 0;
        int sum2 = 0;
        for (int num : arr1) {
            sum1 += num;
        }
        for (int num : arr2) {
            sum2 += num;
        }

        // 원소의 합을 비교
        if (sum1 > sum2) {
            return 1;
        } else if (sum1 < sum2) {
            return -1;
        }

        // 길이와 원소의 합이 모두 같은 경우
        return 0;
    }
}

// 개선된 풀이 방식

import java.util.stream.IntStream;

class Solution {
    public int solution(int[] arr1, int[] arr2) {
        int answer = Integer.compare(arr1.length, arr2.length);

        if(answer == 0) {
            answer = Integer.compare(IntStream.of(arr1).sum(), IntStream.of(arr2).sum());
        }

        return answer;
    }
}

// Integer.compare(a, b)는 두 개의 정수 a와 b를 비교하는 메서드입니다.
// 이 메서드는 a가 b보다 작으면 음수를, a와 b가 같으면 0을, a가 b보다 크면 양수를 반환합니다.
// 이렇게 반환된 값을 활용하여 정수 비교를 수행할 수 있습니다.

// Java 8부터 도입된 IntStream은 기본 데이터 유형인 int에 대한 시퀀스를 나타내는 스트림입니다.

// 스트림 API는 함수형 프로그래밍 스타일을 지원하며, 복잡한 작업을 쉽고 간결하게 표현할 수 있도록 해줍니다.

// 위 코드에서 IntStream은 배열의 요소를 처리하기 위해 사용되고 있으며, 각 배열의 합을 구하는 데 사용됩니다.

// IntStream.of(arr1): arr1 배열의 요소를 포함하는 IntStream을 생성합니다.
// sum(): IntStream의 모든 요소의 합을 반환합니다.
// 따라서, IntStream.of(arr1).sum()의 표현식은 arr1 배열의 모든 요소의 합을 계산합니다. arr2에 대해서도 동일하게 작동합니다.

// 스트림 API는 데이터의 변환, 필터링, 집계 등을 연속된 호출을 통해 수  행할 수 있으며,

// 코드의 가독성을 높이고 유지보수를 용이하게 해줍니다. 여기에는 map, filter, reduce 등의 연산이 있으며,

// 이러한 연산을 연결하여 복잡한 데이터 처리 파이프라인을 구성할 수 있습니다.