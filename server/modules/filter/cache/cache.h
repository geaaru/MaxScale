#pragma once
#ifndef _MAXSCALE_FILTER_CACHE_CACHE_H
#define _MAXSCALE_FILTER_CACHE_CACHE_H
/*
 * Copyright (c) 2016 MariaDB Corporation Ab
 *
 * Use of this software is governed by the Business Source License included
 * in the LICENSE.TXT file and at www.mariadb.com/bsl.
 *
 * Change Date: 2019-07-01
 *
 * On the date above, in accordance with the Business Source License, use
 * of this software will be governed by version 2 or later of the General
 * Public License.
 */

#include <limits.h>

MXS_BEGIN_DECLS

#define CACHE_DEBUG_NONE          0  /* 0b00000 */
#define CACHE_DEBUG_MATCHING      1  /* 0b00001 */
#define CACHE_DEBUG_NON_MATCHING  2  /* 0b00010 */
#define CACHE_DEBUG_USE           4  /* 0b00100 */
#define CACHE_DEBUG_NON_USE       8  /* 0b01000 */
#define CACHE_DEBUG_DECISIONS    16  /* 0b10000 */

#define CACHE_DEBUG_RULES        (CACHE_DEBUG_MATCHING | CACHE_DEBUG_NON_MATCHING)
#define CACHE_DEBUG_USAGE        (CACHE_DEBUG_USE | CACHE_DEBUG_NON_USE)
#define CACHE_DEBUG_MIN          CACHE_DEBUG_NONE
#define CACHE_DEBUG_MAX          (CACHE_DEBUG_RULES | CACHE_DEBUG_USAGE)

// Count
#define CACHE_DEFAULT_MAX_RESULTSET_ROWS UINT_MAX
// Bytes
#define CACHE_DEFAULT_MAX_RESULTSET_SIZE 64 * 1024
// Seconds
#define CACHE_DEFAULT_TTL                10
// Integer value
#define CACHE_DEFAULT_DEBUG              0

MXS_END_DECLS

#endif
